using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class ProjectImage
    {
        [Key]
        public int ImageId { get; set; }

        public int ProjectId { get; set; }

        [Required]
        [MaxLength(500)]
        public string ImageUrl { get; set; } = string.Empty;

        [MaxLength(250)]
        public string? AltTexe { get; set; }

        public int DisplayOrder { get; set; }

        public Project? Project { get; set; }
    }
}
