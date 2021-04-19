
namespace SShopManagementSystem.Common
{
    public class DashboardPageModel
    {
        public int OrderCount { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }
        public int RunsOutProductCount { get; set; }
        public int LowStockProductCount { get; set; }
    }
}