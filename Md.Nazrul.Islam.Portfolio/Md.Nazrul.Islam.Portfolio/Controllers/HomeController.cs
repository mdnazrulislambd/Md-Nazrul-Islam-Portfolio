using Md.Nazrul.Islam.Portfolio.Data;
using Md.Nazrul.Islam.Portfolio.Models;
using Md.Nazrul.Islam.Portfolio.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Md.Nazrul.Islam.Portfolio.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly SiteInfoService _siteInfoService;
        private readonly PortfolioDbContext _context;

        public HomeController(
            ILogger<HomeController> logger,
            SiteInfoService siteInfoService,
            PortfolioDbContext context)
        {
            _logger = logger;
            _siteInfoService = siteInfoService;
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            ViewBag.SiteName = _siteInfoService.GetSiteName();

            var vm = new HomeViewModel
            {
                profile = await _context.Profiles.AsNoTracking()
                .OrderBy(p => p.ProfileId)
                .FirstOrDefaultAsync(),

                Educations = await _context.Educations.AsNoTracking()
                .Where(e => e.IsActive)
                .OrderBy(e => e.DisplayOrder)
                .ToListAsync(),

                SkillCategories = await _context.SkillCategories.AsNoTracking()
                .Where(c => c.IsActive)
                .OrderBy(c => c.DisplayOrder)
                .Include(c => c.Skills.Where(s => s.IsActive).OrderBy(s => s.DisplayOrder))
                .ToListAsync(),

                Experiences = await _context.Experiences.AsNoTracking()
                .Where(x => x.IsActive)
                .OrderBy(x => x.DisplayOrder)
                .ToListAsync(),

                Projects = await _context.Projects.AsNoTracking()
                .Where(p => p.IsPublished)
                .OrderByDescending(p => p.IsFeatured)
                .ThenByDescending(p => p.IsPublished)
                .Take(6)
                .ToListAsync(),

                Tools = await _context.Tools.AsNoTracking()
                .Where(t => t.IsActive)
                .OrderBy(t => t.DisplayOrder)
                .ToListAsync(),

                SocialLinks = await _context.SocialLinks.AsNoTracking()
                .Where(s => s.IsActive)
                .OrderBy(s => s.DisplayOrder)
                .ToListAsync()
            };

            return View(vm);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [EnableRateLimiting("contact")]
        public async Task<IActionResult> Contact(ContactFormViewModel from)
        {
            // Honeypot: bots fill the hidden field, humans never do
            if(!string.IsNullOrEmpty(from.Website))
            {
                return Redirect("/#contact");
            }

            if(!ModelState.IsValid)
            {
                TempData["contactError"] = "Pleace check your input and try again";
                return Redirect("/#contact");
            }

            _context.ContactMessages.Add(new ContactMessage
            {
                Name = from.Name.Trim(),
                Email = from.Email.Trim(),
                Subject = from.Subject.Trim(),
                Message = from.Message.Trim(),
                Status = "New",
                CreatedAt = DateTime.UtcNow
            });

            await _context.SaveChangesAsync();

            TempData["ContactSuccess"] = "Thank you! Your message has been sent.";
            return Redirect("/#contact");
        }

        [ResponseCache(
            Duration = 0,
            Location = ResponseCacheLocation.None,
            NoStore = true)]
        public IActionResult Error()
        {
            return View(
                new ErrorViewModel
                {
                    RequestId = Activity.Current?.Id
                ?? HttpContext.TraceIdentifier
                });
        }


        
    }
}
