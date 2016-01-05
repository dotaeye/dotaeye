namespace DotaEye.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateBlogFields : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Blog", "UserId", c => c.String());
            AlterColumn("dbo.BlogType", "UserId", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.BlogType", "UserId", c => c.Int(nullable: false));
            AlterColumn("dbo.Blog", "UserId", c => c.Int(nullable: false));
        }
    }
}
