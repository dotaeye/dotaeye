using System.Data.Entity.ModelConfiguration;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using DotaEye.Data.Models;

namespace DotaEye.Data.Mapping
{
    public partial class BlogTypeMap : EntityTypeConfiguration<BlogType>
    {
        public BlogTypeMap()
        {
            this.HasKey(a => a.Id);

            this.Property(x => x.UserId).IsRequired().HasMaxLength(50);

            this.Property(x => x.CateName).IsRequired().HasMaxLength(50);

            this.Property(x => x.Code).IsRequired().HasMaxLength(50);

            this.HasOptional(a => a.PCate).WithMany(x => x.ChildCates)

                .HasForeignKey(x => x.PID).WillCascadeOnDelete(false);

            this.HasRequired(a => a.ApplicationUser).WithMany(x => x.BlogType)

                .HasForeignKey(x => x.UserId).WillCascadeOnDelete(false);
        }
    }
}
