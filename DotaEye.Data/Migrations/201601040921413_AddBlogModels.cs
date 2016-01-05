namespace DotaEye.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddBlogModels : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Blog",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Content = c.String(),
                        CreateTime = c.DateTime(nullable: false),
                        LastTime = c.DateTime(nullable: false),
                        BlogTypeID = c.Int(nullable: false),
                        UserID = c.Int(nullable: false),
                        Url = c.String(),
                        Deleted = c.Boolean(nullable: false),
                        ApplicationUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUser_Id)
                .ForeignKey("dbo.BlogType", t => t.BlogTypeID, cascadeDelete: true)
                .Index(t => t.BlogTypeID)
                .Index(t => t.ApplicationUser_Id);
            
            CreateTable(
                "dbo.BlogType",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CateName = c.String(),
                        PID = c.Int(),
                        Code = c.String(),
                        Level = c.Int(nullable: false),
                        UserID = c.Int(nullable: false),
                        Deleted = c.Boolean(nullable: false),
                        ApplicationUser_Id = c.String(maxLength: 128),
                        PCate_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUser_Id)
                .ForeignKey("dbo.BlogType", t => t.PCate_Id)
                .Index(t => t.ApplicationUser_Id)
                .Index(t => t.PCate_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.BlogType", "PCate_Id", "dbo.BlogType");
            DropForeignKey("dbo.Blog", "BlogTypeID", "dbo.BlogType");
            DropForeignKey("dbo.BlogType", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.Blog", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.BlogType", new[] { "PCate_Id" });
            DropIndex("dbo.BlogType", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.Blog", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.Blog", new[] { "BlogTypeID" });
            DropTable("dbo.BlogType");
            DropTable("dbo.Blog");
        }
    }
}
