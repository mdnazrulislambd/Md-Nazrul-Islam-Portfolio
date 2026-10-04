using System.ComponentModel.DataAnnotations;

namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class Skill
    {
        public int SkillId { get; set; }

        public int CategoryId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [MaxLength(500)]
        public string? Description { get; set; }

        public int DisplayOrder {  get; set; }

        public bool IsActive { get; set; }

        public SkillCategory? Category { get; set; }
    }
}
