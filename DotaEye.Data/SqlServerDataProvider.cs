using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Migrations;
using System.Data.SqlClient;
using System.IO;
using System.Text;
using SQ.Core.Data;
using DotaEye.Data.Models;


namespace DotaEye.Data
{
    public class SqlServerDataProvider : IDataProvider
    {


        #region Methods

        /// <summary>
        /// Initialize connection factory
        /// </summary>
        public virtual void InitConnectionFactory()
        {
            var connectionFactory = new SqlConnectionFactory();
            //TODO fix compilation warning (below)
#pragma warning disable 0618
            Database.DefaultConnectionFactory = connectionFactory;
        }

        /// <summary>
        /// Initialize database
        /// </summary>
        public virtual void InitDatabase()
        {
            InitConnectionFactory();
            SetDatabaseInitializer();
        }

        /// <summary>
        /// Set database initializer
        /// </summary>
        public virtual void SetDatabaseInitializer()
        {
            //if (!Database.Exists("DefaultConnection"))
            //{
            //    Database.SetInitializer(new MigrateDatabaseToLatestVersion<NetApiReactContext, NetApiReact.Data.Migrations.Configuration>());
            //}

        }

        /// <summary>
        /// A value indicating whether this data provider supports stored procedures
        /// </summary>
        public virtual bool StoredProceduredSupported
        {
            get { return true; }
        }

        /// <summary>
        /// Gets a support database parameter object (used by stored procedures)
        /// </summary>
        /// <returns>Parameter</returns>
        public virtual DbParameter GetParameter()
        {
            return new SqlParameter();
        }

        #endregion
    }
}
