#pragma checksum "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Master\ProductVendors\ProductVendorsIndex.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "31f07434b4fc6e4ba88979aeb4f09352e23d0c86"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Master_ProductVendors_ProductVendorsIndex), @"mvc.1.0.view", @"/Modules/Master/ProductVendors/ProductVendorsIndex.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"31f07434b4fc6e4ba88979aeb4f09352e23d0c86", @"/Modules/Master/ProductVendors/ProductVendorsIndex.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"486235e1247acee84b74c614800e82d74e006b15", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Master_ProductVendors_ProductVendorsIndex : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Master\ProductVendors\ProductVendorsIndex.cshtml"
  
    ViewData["Title"] = Serenity.LocalText.Get("Db.Master.ProductVendors.EntityPlural");

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<div id=\"GridDiv\"></div>\r\n\r\n<script type=\"text/javascript\">\r\n    jQuery(function () {\r\n        new SShopManagementSystem.Master.ProductVendorsGrid($(\'#GridDiv\'), {}).init();\r\n\r\n        Q.initFullHeightGridPage($(\'#GridDiv\'));\r\n    });\r\n</script>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
