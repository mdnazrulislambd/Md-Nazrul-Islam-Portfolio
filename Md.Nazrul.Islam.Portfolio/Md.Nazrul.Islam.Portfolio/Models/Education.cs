using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class Education
    {
        [Key]
        public int EducationId { get; set; }

        [Required]
        [MaxLength(250)]
        public string Institution { get; set; } = string.Empty;

        [Required]
        [MaxLength(150)]
        public string Degree { get; set; } = string.Empty ;

        [MaxLength(200)]
        public string? FieldOfStudy { get; set; }

        public string? StartYear { get; set; }

        public string? EndYear { get; set; }

        [MaxLength(50)]
        public string? Result { get; set; }

        public string? Description { get; set; }

        public int DisplayOrder {  get; set; }

        public bool IsActive   { get; set; }
    }
}
