
namespace SShopManagementSystem.Common.Pages
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using Microsoft.AspNetCore.Mvc;

    using Master;
    using Master.Entities;

    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            /*
            var cahcedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5), OrderRow.Fields.GenerationKey, () =>
            {
                var model = new DashboardPageModel();
                var o = OrderRow.Fields;
                using (var connection = SqlConnections.NewFor<OrderRow>())
                {
                    model.OpenOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.NotShipped);
                    var closedOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.Shipped);
                    var totalOrders = model.OpenOrders + closedOrders;
                    model.ClosedOrderPercent = (int).Math.Round(totalOrder == 0 ? 100 : ((double)closedOrders / (double)totalOrders * 100);
                    model.CustomerCount = connection.Count<CustomerRow>();
                    model.ProductCount = connection.Count<ProductRow>();
                }
                return model;
            });
            */
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromSeconds(1), OrdersRow.Fields.GenerationKey, () =>
            {
                var model = new DashboardPageModel();
                var o = OrdersRow.Fields;
                var p = ProductsRow.Fields;
                using (var connection = SqlConnections.NewByKey("Default"))
                {
                    model.OrderCount = connection.Count<OrdersRow>(o.DatetimeOrder == DateTime.Today);
                    model.CustomerCount = connection.Count<CustomersRow>();
                    model.ProductCount = connection.Count<ProductsRow>();
                    model.RunsOutProductCount = connection.Count<ProductsRow>(p.StockQuantityProduct < 20);
                    model.LowStockProductCount = connection.Count<ProductsRow>(p.StockQuantityProduct >= 20 && p.StockQuantityProduct <= 50);
                }
                return model;
            });
            //return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }
    }
}
