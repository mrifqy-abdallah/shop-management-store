
namespace SShopManagementSystem.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.OrderDetails")]
    [BasedOnRow(typeof(Entities.OrderDetailsRow), CheckNames = true)]
    public class OrderDetailsColumns
    {

        [EditLink, Width(190), SortOrder(1)]
        public String ProductIdName { get; set; }
        public Decimal UnitPriceOrder { get; set; }
        public Int32 QuantityOrder { get; set; }
        public Decimal TotalPriceOfThisProduct { get; set; }
    }
}