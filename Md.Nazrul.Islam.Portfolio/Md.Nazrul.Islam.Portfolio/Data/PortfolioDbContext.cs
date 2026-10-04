using Microsoft.EntityFrameworkCore;

namespace Md.Nazrul.Islam.Portfolio.Data
{
    public class PortfolioDbContext : DbContext
    {
        public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options)
            : base(options)
        {
        }
    }
}
