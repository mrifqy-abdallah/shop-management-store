namespace SShopManagementSystem.Master.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Master.ProductsPurchasedIn")]
    [BasedOnRow(typeof(Entities.OrderDetailsRow))]
    public class ProductsPurchasedInColumns
    {
        [Width(100)]
        public String OrderId { get; set; }
        [Width(220), SortOrder(1, descending: true)]
        public DateTime OrderIdDatetime { get; set; }
        [Width(100)]
        public Int32 QuantityOrder { get; set; }
    }
}
