using System;
using System.Collections.Generic;
using System.Linq;
using SQ.Core.Data;
using DotaEye.Data.Service;
using DotaEye.Data.Models;

namespace DotaEye.Data.Impl
{
    public class UserActivitiesService : IUserActivitiesServices
    {
        #region Fields

        private readonly IRepository<UserActivities> _UserActivitiesRepository;

        #endregion

        #region Ctor

        public UserActivitiesService(IRepository<UserActivities> UserActivitiesRepository
           )
        {
            this._UserActivitiesRepository = UserActivitiesRepository;

        }
        #endregion

        public Models.UserActivities FindOne(int Id)
        {
            if (Id == 0)
                return null;

            return _UserActivitiesRepository.GetById(Id);
        }

        public void Delete(Models.UserActivities entity)
        {
            if (entity == null)
                throw new ArgumentNullException("UserActivities");

            Delete(entity);
        }

        public SQ.Core.Data.IPagedList<Models.UserActivities> GetPageList(int pageIndex, int pageSize)
        {
            var query = _UserActivitiesRepository.Table;

            query = query.OrderByDescending(a => a.Id);

            var result = new PagedList<UserActivities>(query, pageIndex, pageSize);

            return result;
        }

        public void Insert(Models.UserActivities entity)
        {
            if (entity == null)
                throw new ArgumentNullException("UserActivities");
            _UserActivitiesRepository.Insert(entity);
        }

        public void Update(Models.UserActivities entity)
        {
            if (entity == null)
                throw new ArgumentNullException("UserActivities");

            _UserActivitiesRepository.Update(entity);
        }

        public IQueryable<Models.UserActivities> GetAll()
        {
            return _UserActivitiesRepository.Table;
        }
    }
}
