using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class Tool
    {
        [Key]
        public int ToolId { get; set; }

        [Required]
        [MaxLength(100)]

        public string Name { get; set; } = string.Empty;

        [MaxLength(250)]
        public string? IconClass { get; set; }

        [MaxLength(100)]
        public string? Category { get; set;}

        [MaxLength(500)]
        public string? Description { get; set; }

        public int DisplayOrder { get; set; }

        public bool IsActive { get; set; }
    }
}
