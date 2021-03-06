using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DataAccess;
using API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductsController : ControllerBase
    {

        private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;


        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetAllproducts()
        {
            return await _context.Products.ToListAsync();

        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Product>> GetProduct(int Id)
        {
            return await _context.Products.FindAsync(Id);
        }
    }
}