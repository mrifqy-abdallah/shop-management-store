
namespace SShopManagementSystem.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.ManagersRow))]
    public class ManagersController : Controller
    {
        [Route("Master/Managers")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Managers/ManagersIndex.cshtml");
        }
    }
}