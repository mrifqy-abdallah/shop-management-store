
namespace SShopManagementSystem.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductVendorsRow))]
    public class ProductVendorsController : Controller
    {
        [Route("Master/ProductVendors")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/ProductVendors/ProductVendorsIndex.cshtml");
        }
    }
}