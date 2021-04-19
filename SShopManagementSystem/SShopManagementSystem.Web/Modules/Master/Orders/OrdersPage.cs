
namespace SShopManagementSystem.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.OrdersRow))]
    public class OrdersController : Controller
    {
        [Route("Master/Orders")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Orders/OrdersIndex.cshtml");
        }
    }
}