namespace Md.Nazrul.Islam.Portfolio.Models
{
    public class HomeViewModel
    {
        public Profile? profile {  get; set; }
        public List<Education> Educations { get; set; } = new();
        public List<SkillCategory> SkillCategories { get; set; } = new();
        public List<Experience> Experiences { get; set; } = new();
        public List<Project> Projects { get; set; } = new();
        public List<Tool> Tools { get; set; } = new();
        public List<SocialLink> SocialLinks { get; set; } = new();
    }
}
