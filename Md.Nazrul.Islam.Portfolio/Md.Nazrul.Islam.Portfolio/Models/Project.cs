using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class Project
    {
        [Key]
        public int ProjectId { get; set; }

        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MaxLength(250)]
        public string Slug { get; set; } = string.Empty;
        [Required]
        [MaxLength(500)]

        public string ShortDescription { get; set; } = string.Empty;
        [Required]

        public string Description { get; set; } = string.Empty;
        [MaxLength(500)]

        public string? Technologies { get;set; }
        [MaxLength(200)]

        public string? Role { get; set;}
        
        public string? Challenges { get; set; }
        public string? LessonsLearned { get; set; }
        [MaxLength(500)]

        public string? GithubUrl { get; set; }
        [MaxLength(500)]

        public string? LiveDemoUrl { get; set; }

        public DateTime? ProjectDate { get; set; }

        public bool IsFeatured { get; set; }

        public bool IsPublished { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }

        public ICollection<ProjectImage> projectImages { get; set; } = new List<ProjectImage>();
    }
}
