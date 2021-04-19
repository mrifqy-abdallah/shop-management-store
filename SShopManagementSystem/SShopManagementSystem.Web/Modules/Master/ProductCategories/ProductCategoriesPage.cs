
namespace SShopManagementSystem.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ProductCategoriesRow))]
    public class ProductCategoriesController : Controller
    {
        [Route("Master/ProductCategories")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/ProductCategories/ProductCategoriesIndex.cshtml");
        }
    }
}