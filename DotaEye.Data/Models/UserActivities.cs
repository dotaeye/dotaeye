using System;
using System.Collections.Generic;
using SQ.Core.Data;

namespace DotaEye.Data.Models
{
    using System;
    using System.Collections.Generic;
    using SQ.Core.Data;

    public partial class UserActivities : BaseEntity
    {
        public System.DateTime Time { get; set; }
        public int UserId { get; set; }
        public UserActivityType Type { get; set; }

        public virtual User User { get; set; }
    }
}
