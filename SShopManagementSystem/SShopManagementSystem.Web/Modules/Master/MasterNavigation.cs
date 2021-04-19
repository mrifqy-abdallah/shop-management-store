using Serenity.Navigation;
using MyPages = SShopManagementSystem.Master.Pages;

[assembly: NavigationMenu(2000, "Purchasement")]
[assembly: NavigationLink(2000, "Purchasement", typeof(MyPages.OrdersController), icon: "fa-shopping-cart")]

[assembly: NavigationMenu(3000, "Management", icon: "fa-bookmark")]
[assembly: NavigationLink(3100, "Management/Customers", typeof(MyPages.CustomersController), icon: "fa-angle-right")]
[assembly: NavigationLink(3200, "Management/Managers", typeof(MyPages.ManagersController), icon: "fa-angle-right")]
[assembly: NavigationLink(3300, "Management/Stores", typeof(MyPages.StoresController), icon: "fa-angle-right")]
[assembly: NavigationLink(3400, "Management/Workers", typeof(MyPages.WorkersController), icon: "fa-angle-right")]

[assembly: NavigationMenu(4000, "Stocks", icon: "fa-cubes")]
[assembly: NavigationLink(4100, "Stocks/Product Categories", typeof(MyPages.ProductCategoriesController), icon: "fa-angle-right")]
[assembly: NavigationLink(4200, "Stocks/Products", typeof(MyPages.ProductsController), icon: "fa-angle-right")]
[assembly: NavigationLink(4300, "Stocks/Vendors", typeof(MyPages.ProductVendorsController), icon: "fa-angle-right")]
