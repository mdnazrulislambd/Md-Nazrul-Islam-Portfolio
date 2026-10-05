using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class SocialLink
    {
        [Key]
        public int SocialLinkId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Platform { get; set; } = string.Empty;

        [Required]
        [MaxLength(500)]
        public string Url { get; set; } = string.Empty ;

        [MaxLength(200)]
        public string? IconClass { get; set; }

        public int DisplayOrder { get; set; }
        public bool IsActive { get; set; }
    }
}
