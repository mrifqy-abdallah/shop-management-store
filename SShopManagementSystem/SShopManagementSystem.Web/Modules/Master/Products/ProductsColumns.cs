
namespace SShopManagementSystem.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductId { get; set; }
        [EditLink, Width(200), SortOrder(1)]
        public String NameProduct { get; set; }
        [Width(150)]
        public String TypeIdName { get; set; }
        [Width(200)]
        public String VendorIdName { get; set; }
        public Double WeightProduct { get; set; }
        [Width(100)]
        public String SizeProduct { get; set; }
        public Int32 StockQuantityProduct { get; set; }
        public Decimal BuyPriceProduct { get; set; }
        public Decimal SalePriceProduct { get; set; }
    }
}