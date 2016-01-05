using System;
using System.Collections.Generic;
using SQ.Core.Data;

namespace DotaEye.Data.Models
{
    using System;
    using System.Collections.Generic;
    using SQ.Core.Data;

    public partial class BlogType : BaseEntity
    {
        public BlogType()
        {
            this.Blog = new HashSet<Blog>();
            this.ChildCates = new HashSet<BlogType>();
        }

        public string CateName { get; set; }
        public int? PID { get; set; }
        public string Code { get; set; }
        public int Level { get; set; }
        public string UserId { get; set; }
        public bool Deleted { get; set; }


        public virtual BlogType PCate { get; set; }
        public virtual ICollection<BlogType> ChildCates { get; set; }
        public virtual ICollection<Blog> Blog { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
