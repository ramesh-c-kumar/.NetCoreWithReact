using API.Model;
using Microsoft.EntityFrameworkCore;

namespace API.DataAccess
{
    public class StoreContext:DbContext
    {
        public StoreContext(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<Product> Products {get;set;}
    }
}