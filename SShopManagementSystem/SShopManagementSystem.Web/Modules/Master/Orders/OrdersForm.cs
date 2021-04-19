
namespace SShopManagementSystem.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Orders")]
    [BasedOnRow(typeof(Entities.OrdersRow), CheckNames = true)]
    public class OrdersForm
    {
        [DisplayName("Date and Time"), DateTimeEditor(IntervalMinutes = 1), DefaultValue("now"), HideOnInsert, HideOnUpdate]
        public DateTime DatetimeOrder { get; set; }

        [DefaultValue("1")]
        public Int32 CustomerId { get; set; }

        public Int32 WorkerId { get; set; }
        [DisplayName("Product(s) to be Purchased"), OrderDetailsEditor]
        public List<Entities.OrderDetailsRow> OrderDetails { get; set; }

        [ReadOnly(true)]
        public Decimal TotalAmount { get; set; }
    }
}