#pragma checksum "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Membership\Account\ResetPassword\AccountResetPassword.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b150077b0d9b14b96029d27643bb6206f032354c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Membership_Account_ResetPassword_AccountResetPassword), @"mvc.1.0.view", @"/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b150077b0d9b14b96029d27643bb6206f032354c", @"/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"486235e1247acee84b74c614800e82d74e006b15", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Membership_Account_ResetPassword_AccountResetPassword : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<SShopManagementSystem.Membership.ResetPasswordModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Membership\Account\ResetPassword\AccountResetPassword.cshtml"
  
    ViewData["Title"] = Texts.Forms.Membership.ResetPassword.FormTitle;
    ViewData["PageId"] = "ResetPassword";
    Layout = MVC.Views.Shared._LayoutNoNavigation;

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<script id=\"Template_Membership_ResetPasswordPanel\" type=\"text/template\">\r\n<div>\r\n    <h3 class=\"page-title\">");
#nullable restore
#line 11 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Membership\Account\ResetPassword\AccountResetPassword.cshtml"
                      Write(Texts.Forms.Membership.ResetPassword.FormTitle);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h3>
    <form id=""~_Form"" action="""">
        <div class=""s-Form"">
            <div class=""fieldset ui-widget ui-widget-content ui-corner-all"">
                <div id=""~_PropertyGrid""></div>
                <div class=""clear""></div>
            </div>
            <div class=""buttons"">
                <button id=""~_SubmitButton"" type=""submit"" class=""btn btn-primary"">
                    ");
#nullable restore
#line 20 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Membership\Account\ResetPassword\AccountResetPassword.cshtml"
               Write(Texts.Forms.Membership.ResetPassword.SubmitButton);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                </button>\r\n            </div>\r\n            <input type=\"hidden\" id=\"~_Token\" value=\"");
#nullable restore
#line 23 "C:\Users\Microsoft\source\repos\SShopManagementSystem\SShopManagementSystem\SShopManagementSystem.Web\Modules\Membership\Account\ResetPassword\AccountResetPassword.cshtml"
                                                Write(Model.Token);

#line default
#line hidden
#nullable disable
            WriteLiteral(@""" />
        </div>
    </form>
</div>
</script>

<div class=""page-content"">
    <div id=""ResetPasswordPanel"">
    </div>
</div>

<script type=""text/javascript"">
$(function() {
    new SShopManagementSystem.Membership.ResetPasswordPanel($('#ResetPasswordPanel')).init();
});
</script>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<SShopManagementSystem.Membership.ResetPasswordModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
