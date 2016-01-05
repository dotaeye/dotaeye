using System;
using System.Collections.Generic;
using SQ.Core.Data;

namespace DotaEye.Data.Models
{
    using System;
    using System.Collections.Generic;
    using SQ.Core.Data;

    public partial class Blog : BaseEntity
    {
        public string Name { get; set; }
        public string Content { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime LastTime { get; set; }
        public int BlogTypeID { get; set; }
        public string UserId { get; set; }
        public string Url { get; set; }
        public bool Deleted { get; set; }
        public virtual BlogType BlogType { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
