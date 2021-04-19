
namespace SShopManagementSystem.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.ProductCategories")]
    [BasedOnRow(typeof(Entities.ProductCategoriesRow), CheckNames = true)]
    public class ProductCategoriesForm
    {
        public String NameType { get; set; }
        [TextAreaEditor(Rows = 10)]
        public String DescriptionType { get; set; }
    }
}