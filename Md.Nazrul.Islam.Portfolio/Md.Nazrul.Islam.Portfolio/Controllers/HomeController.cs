using System.Diagnostics;
using Md.Nazrul.Islam.Portfolio.Models;
using Microsoft.AspNetCore.Mvc;
using Md.Nazrul.Islam.Portfolio.Services;

namespace Md.Nazrul.Islam.Portfolio.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly SiteInfoService _siteInfoService;

        public HomeController(
            ILogger<HomeController> logger,
            SiteInfoService siteInfoService)
        {
            _logger = logger;
            _siteInfoService = siteInfoService;
        }

        public IActionResult Index()
        {
            ViewBag.SiteName = _siteInfoService.GetSiteName();

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
                { RequestId = Activity.Current?.Id 
                ?? HttpContext.TraceIdentifier 
                });
        }
    }
}
