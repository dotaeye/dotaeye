using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Http;
using Autofac;
using Autofac.Builder;
using Autofac.Core;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using SQ.Core;
using SQ.Core.Data;
using SQ.Core.Config;
using SQ.Core.Infrastructure;
using SQ.Core.Ioc;
using SQ.Core.Reflection;
using DotaEye.Data;
using DotaEye.Data.Service;
using DotaEye.Data.Impl;

namespace DotaEye.Ioc
{
    public class DependencyRegistrar : IDependencyRegistrar
    {

        public virtual void Register(ContainerBuilder builder, ITypeFinder typeFinder, SQConfig config)
        {

            builder.Register(c => new HttpContextWrapper(HttpContext.Current) as HttpContextBase)
                .As<HttpContextBase>()
                .InstancePerRequest();
            builder.Register(c => c.Resolve<HttpContextBase>().Request)
                .As<HttpRequestBase>()
                .InstancePerRequest();
            builder.Register(c => c.Resolve<HttpContextBase>().Response)
                .As<HttpResponseBase>()
                .InstancePerRequest();
            builder.Register(c => c.Resolve<HttpContextBase>().Server)
                .As<HttpServerUtilityBase>()
                .InstancePerRequest();
            builder.Register(c => c.Resolve<HttpContextBase>().Session)
                .As<HttpSessionStateBase>()
                .InstancePerRequest();

            //注册所有的Controller
            builder.RegisterControllers(typeFinder.GetAssemblies().ToArray());

            //注册所有的ApiController

            builder.RegisterApiControllers(typeFinder.GetAssemblies().ToArray());


            builder.RegisterType<SqlServerDataProvider>().As<IDataProvider>().InstancePerDependency();


            builder.Register<IDbContext>(c => new AppContext())
                .InstancePerRequest();

            builder.RegisterGeneric(typeof(EfRepository<>))
                .As(typeof(IRepository<>)).InstancePerRequest();



            builder.RegisterType<UserActivitiesService>().As<IUserActivitiesServices>().InstancePerRequest();
        }

        public int Order
        {
            get { return 0; }
        }
    }
}