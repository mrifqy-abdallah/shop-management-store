
namespace SShopManagementSystem.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.WorkersRow))]
    public class WorkersController : Controller
    {
        [Route("Master/Workers")]
        public ActionResult Index()
        {
            return View("~/Modules/Master/Workers/WorkersIndex.cshtml");
        }
    }
}