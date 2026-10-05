using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class Certification
    {
        [Key]
        public int CertificationId { get; set; }

        [Required]
        [MaxLength(250)]
        public string Name { get; set; } = string.Empty;

        [MaxLength(250)]
        public string? Organization { get; set; }

        public short? Year { get; set; }

        [MaxLength(100)]
        public string? Duration { get; set; }

        public string? Description { get; set; }

        public bool IsActive { get; set; }
    }
}
