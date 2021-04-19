
namespace SShopManagementSystem.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.ProductCategories")]
    [BasedOnRow(typeof(Entities.ProductCategoriesRow), CheckNames = true)]
    public class ProductCategoriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TypeId { get; set; }
        [EditLink, SortOrder(1)]
        public String NameType { get; set; }
        public String DescriptionType { get; set; }
    }
}