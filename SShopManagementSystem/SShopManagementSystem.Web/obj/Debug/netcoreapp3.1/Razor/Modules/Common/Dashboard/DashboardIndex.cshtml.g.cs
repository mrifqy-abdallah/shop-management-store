#pragma checksum "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Common\Dashboard\DashboardIndex.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "86a2a9870e2ada2ef1e67e2199034a98a8dc0911"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Common_Dashboard_DashboardIndex), @"mvc.1.0.view", @"/Modules/Common/Dashboard/DashboardIndex.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\_ViewImports.cshtml"
using SShopManagementSystem;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\_ViewImports.cshtml"
using System.Text;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"86a2a9870e2ada2ef1e67e2199034a98a8dc0911", @"/Modules/Common/Dashboard/DashboardIndex.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"486235e1247acee84b74c614800e82d74e006b15", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Common_Dashboard_DashboardIndex : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<SShopManagementSystem.Common.DashboardPageModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 2 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Common\Dashboard\DashboardIndex.cshtml"
  
    ViewData["Title"] = "Dashboard";
    ViewData["PageId"] = "Dashboard";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
            DefineSection("Head", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 8 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Common\Dashboard\DashboardIndex.cshtml"
Write(Html.StyleBundle("Pages/Dashboard"));

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n");
#nullable restore
#line 9 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Common\Dashboard\DashboardIndex.cshtml"
Write(Html.ScriptBundle("Pages/Dashboard"));

#line default
#line hidden
#nullable disable
                WriteLiteral("\r\n");
            }
            );
            WriteLiteral("\r\n");
            DefineSection("ContentHeader", async() => {
                WriteLiteral("\r\n    <h1>");
#nullable restore
#line 13 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Common\Dashboard\DashboardIndex.cshtml"
   Write(LocalText.Get("Navigation.Dashboard"));

#line default
#line hidden
#nullable disable
                WriteLiteral("<small>");
                WriteLiteral("</small></h1>\r\n");
            }
            );
            WriteLiteral("\r\n<!-- Small boxes (Stat box) -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-aqua\">\r\n            <div class=\"inner\">\r\n                <h3>");
#nullable restore
#line 22 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Common\Dashboard\DashboardIndex.cshtml"
               Write(Model.OrderCount);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n                <p>Today\'s Purchasement</p>\r\n            </div>\r\n            <div class=\"icon\">\r\n                <i class=\"ion ion-bag\"></i>\r\n            </div>\r\n            <a");
            BeginWriteAttribute("href", " href=\"", 805, "\"", 812, 0);
            EndWriteAttribute();
            WriteLiteral(@" class=""small-box-footer"">More info <i class=""fa fa-arrow-circle-right""></i></a>
        </div>
    </div><!-- ./col -->
    <div class=""col-lg-3 col-xs-6"">
        <!-- small box -->
        <div class=""small-box bg-green"">
            <div class=""inner"">
                <h3>");
#nullable restore
#line 35 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Common\Dashboard\DashboardIndex.cshtml"
               Write(Model.ProductCount);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n                <p>Total Product</p>\r\n            </div>\r\n            <div class=\"icon\">\r\n                <i class=\"ion ion-person-add\"></i>\r\n            </div>\r\n            <a");
            BeginWriteAttribute("href", " href=\"", 1299, "\"", 1306, 0);
            EndWriteAttribute();
            WriteLiteral(@" class=""small-box-footer"">More info <i class=""fa fa-arrow-circle-right""></i></a>
        </div>
    </div><!-- ./col -->
    <div class=""col-lg-3 col-xs-6"">
        <!-- small box -->
        <div class=""small-box bg-yellow"">
            <div class=""inner"">
                <h3>");
#nullable restore
#line 48 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Common\Dashboard\DashboardIndex.cshtml"
               Write(Model.LowStockProductCount);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n                <p>Products needs to reorder</p>\r\n            </div>\r\n            <div class=\"icon\">\r\n                <i class=\"ion ion-pie-graph\"></i>\r\n            </div>\r\n            <a");
            BeginWriteAttribute("href", " href=\"", 1813, "\"", 1820, 0);
            EndWriteAttribute();
            WriteLiteral(@" class=""small-box-footer"">More info <i class=""fa fa-arrow-circle-right""></i></a>
        </div>
    </div><!-- ./col -->
    <div class=""col-lg-3 col-xs-6"">
        <!-- small box -->
        <div class=""small-box bg-red"">
            <div class=""inner"">
                <h3>");
#nullable restore
#line 61 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Common\Dashboard\DashboardIndex.cshtml"
               Write(Model.RunsOutProductCount);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n                <p>Products (nearly) runs out</p>\r\n            </div>\r\n            <div class=\"icon\">\r\n                <i class=\"ion ion-pie-graph\"></i>\r\n            </div>\r\n            <a");
            BeginWriteAttribute("href", " href=\"", 2324, "\"", 2331, 0);
            EndWriteAttribute();
            WriteLiteral(" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n    </div><!-- ./col -->\r\n</div><!-- /.row -->\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<SShopManagementSystem.Common.DashboardPageModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
