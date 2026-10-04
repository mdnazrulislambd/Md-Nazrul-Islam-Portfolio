using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class Experience
    {
        public int ExperienceId { get; set; }

        [Required]
        [MaxLength(200)]
        public string JobTitle { get; set; } = string.Empty;

        [Required]
        [MaxLength(250)]
        public string Company { get; set; } = string.Empty;

        [MaxLength(200)]
        public string? Location { get; set; }
        
        [Required]
        public DateTime StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        public bool IsCurrent { get; set; }

        public string? Description { get; set; }

        public int DisplayOrder { get; set; }

        public bool IsActive { get; set; }
    }
}
