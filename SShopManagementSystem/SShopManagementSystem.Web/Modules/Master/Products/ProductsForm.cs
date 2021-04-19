
namespace SShopManagementSystem.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsForm
    {
        [Category("General Information")]
        public String NameProduct { get; set; }
        public Int32 TypeId { get; set; }
        public Int32 VendorId { get; set; }
        public Double WeightProduct { get; set; }
        public String SizeProduct { get; set; }

        [Category("Stockpile")]
        public Int32 StockQuantityProduct { get; set; }

        [Category("Pricing")]
        public Decimal BuyPriceProduct { get; set; }
        public Decimal SalePriceProduct { get; set; }
    }
}