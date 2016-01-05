using System.Data.Entity.ModelConfiguration;
using System.ComponentModel.DataAnnotations.Schema;
using DotaEye.Data.Models;

namespace DotaEye.Data.Mapping
{
    public partial class BlogMap : EntityTypeConfiguration<Blog>
    {
        public BlogMap()
        {
            this.HasKey(a => a.Id);


            this.Property(x => x.Name).IsRequired().HasMaxLength(50);

            this.Property(x => x.UserId).IsRequired().HasMaxLength(50);

            this.Property(x => x.Content).IsRequired();


            this.Property(x => x.Url).IsRequired().HasMaxLength(20);

            this.HasRequired(a => a.ApplicationUser).WithMany(x => x.Blog)

                .HasForeignKey(x => x.UserId).WillCascadeOnDelete(false);

            this.HasRequired(a => a.BlogType).WithMany(x => x.Blog)

                .HasForeignKey(x => x.BlogTypeID).WillCascadeOnDelete(false);
        }
    }
}