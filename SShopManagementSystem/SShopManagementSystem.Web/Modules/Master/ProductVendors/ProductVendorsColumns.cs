
namespace SShopManagementSystem.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.ProductVendors")]
    [BasedOnRow(typeof(Entities.ProductVendorsRow), CheckNames = true)]
    public class ProductVendorsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 VendorId { get; set; }
        [EditLink, SortOrder(1), Width(300)]
        public String NameVendor { get; set; }
    }
}