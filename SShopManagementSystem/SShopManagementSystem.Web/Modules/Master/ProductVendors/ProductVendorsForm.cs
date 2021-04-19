
namespace SShopManagementSystem.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.ProductVendors")]
    [BasedOnRow(typeof(Entities.ProductVendorsRow), CheckNames = true)]
    public class ProductVendorsForm
    {
        public String NameVendor { get; set; }
        public String LogoVendor { get; set; }
    }
}