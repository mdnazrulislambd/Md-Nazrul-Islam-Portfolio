using Md.Nazrul.Islam.Portfolio.Data;
using Md.Nazrul.Islam.Portfolio.Models;
using Md.Nazrul.Islam.Portfolio.Services;
using Microsoft.AspNetCore.Mvc;
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
            //tamp 
            var profileCount = await _context.Profiles.CountAsync();
            ViewBag.ProfileCount = profileCount;

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
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

        public async Task<IActionResult> TestDatabase()
        {
            var testProfile = new Profile
            {
                FullName = "Test User",
                ProfessionalTitle = "Database Test",
                ProfileImageUrl = "test-profile.jpg",
                CVUrl = "test-cv.pdf",
                Email = "test@example.com",
                Phone = "01234567891",
                Location = "Test Location",
                UpdatedAt = DateTime.Now.ToString()
            };

            _context.Profiles.Add(testProfile);

            await _context.SaveChangesAsync();

            return Content("EF Core INSERT test successful!");
        }
    }
}
