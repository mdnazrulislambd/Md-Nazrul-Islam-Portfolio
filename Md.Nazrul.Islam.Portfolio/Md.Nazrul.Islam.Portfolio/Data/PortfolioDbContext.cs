using Md.Nazrul.Islam.Portfolio.Models;
using Microsoft.EntityFrameworkCore;

namespace Md.Nazrul.Islam.Portfolio.Data
{
    public class PortfolioDbContext : DbContext
    {
        public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<SkillCategory> SkillCategories { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Experience> Experiences { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ProjectImage> ProjectImages { get; set; }
        public DbSet<Tool> Tools { get; set; }
        public DbSet<Certification> Certifications { get; set; }
        public DbSet<SocialLink> SocialLinks { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }
        public DbSet<MessageReply> MessageReplies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Table Mapping (names must match the SQL Server tables)
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Profile>().ToTable("Profile");
            modelBuilder.Entity<Education>().ToTable("Education");
            modelBuilder.Entity<SkillCategory>().ToTable("SkillCategories");
            modelBuilder.Entity<Skill>().ToTable("Skills");
            modelBuilder.Entity<Experience>().ToTable("Experience");
            modelBuilder.Entity<Project>().ToTable("Projects");
            modelBuilder.Entity<ProjectImage>().ToTable("ProjectImages");
            modelBuilder.Entity<Tool>().ToTable("Tools");
            modelBuilder.Entity<Certification>().ToTable("Certifications");
            modelBuilder.Entity<SocialLink>().ToTable("SocialLinks");
            modelBuilder.Entity<ContactMessage>().ToTable("ContactMessages");
            modelBuilder.Entity<MessageReply>().ToTable("MessageReplies");

            // Relationships
            modelBuilder.Entity<Skill>()
                .HasOne(s => s.Category)
                .WithMany(c => c.Skills)
                .HasForeignKey(s => s.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<ProjectImage>()
                .HasOne(pi => pi.Project)
                .WithMany(p => p.ProjectImages)
                .HasForeignKey(pi => pi.ProjectId)
                .OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<MessageReply>()
                .HasOne(mr => mr.Message)
                .WithMany(m => m.Replies)
                .HasForeignKey(mr => mr.MessageId)
                .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<MessageReply>()
                .HasOne(mr => mr.User)
                .WithMany()
                .HasForeignKey(mr => mr.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Unique Constraints
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();
            modelBuilder.Entity<Project>()
                .HasIndex(p => p.Slug)
                .IsUnique();

            // Default Values
            modelBuilder.Entity<User>()
                .Property(u => u.IsActive)
                .HasDefaultValue(true);
            modelBuilder.Entity<User>()
                .Property(u => u.CreatedAt)
                .HasDefaultValueSql("SYSUTCDATETIME()");
            modelBuilder.Entity<Education>()
                .Property(e => e.DisplayOrder)
                .HasDefaultValue(0);
            modelBuilder.Entity<Education>()
                .Property(e => e.IsActive)
                .HasDefaultValue(true);
            modelBuilder.Entity<SkillCategory>()
                .Property(sc => sc.DisplayOrder)
                .HasDefaultValue(0);
            modelBuilder.Entity<SkillCategory>()
                .Property(sc => sc.IsActive)
                .HasDefaultValue(true);
            modelBuilder.Entity<Skill>()
                .Property(s => s.DisplayOrder)
                .HasDefaultValue(0);
            modelBuilder.Entity<Skill>()
                .Property(s => s.IsActive)
                .HasDefaultValue(true);
            modelBuilder.Entity<Experience>()
                .Property(e => e.DisplayOrder)
                .HasDefaultValue(0);
            modelBuilder.Entity<Experience>()
                .Property(e => e.IsActive)
                .HasDefaultValue(true);
            modelBuilder.Entity<Project>()
                .Property(p => p.IsFeatured)
                .HasDefaultValue(false);
            modelBuilder.Entity<Project>()
                .Property(p => p.IsPublished)
                .HasDefaultValue(false);
            modelBuilder.Entity<ProjectImage>()
                .Property(pi => pi.DisplayOrder)
                .HasDefaultValue(0);
            modelBuilder.Entity<Tool>()
                .Property(t => t.DisplayOrder)
                .HasDefaultValue(0);
            modelBuilder.Entity<Tool>()
                .Property(t => t.IsActive)
                .HasDefaultValue(true);
            modelBuilder.Entity<Certification>()
                .Property(c => c.IsActive)
                .HasDefaultValue(true);
            modelBuilder.Entity<SocialLink>()
                .Property(sl => sl.DisplayOrder)
                .HasDefaultValue(0);
            modelBuilder.Entity<SocialLink>()
                .Property(sl => sl.IsActive)
                .HasDefaultValue(true);
            modelBuilder.Entity<MessageReply>()
                .Property(mr => mr.EmailSent)
                .HasDefaultValue(false);

            // Timestamps: let the database fill them in (UTC) when C# leaves them unset
            modelBuilder.Entity<ContactMessage>()
                .Property(m => m.CreatedAt)
                .HasDefaultValueSql("SYSUTCDATETIME()");
            modelBuilder.Entity<Project>()
                .Property(p => p.CreatedAt)
                .HasDefaultValueSql("SYSUTCDATETIME()");
            modelBuilder.Entity<Profile>()
                .Property(p => p.UpdatedAt)
                .HasDefaultValueSql("SYSUTCDATETIME()");
            modelBuilder.Entity<MessageReply>()
                .Property(r => r.RepliedAt)
                .HasDefaultValueSql("SYSUTCDATETIME()");
        }
    }
}