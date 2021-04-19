
namespace SShopManagementSystem.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.StoresRow))]
    public class StoresController : Controller
    {
        [Route("Master/Stores")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Stores/StoresIndex.cshtml");
        }
    }
}