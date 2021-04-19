
namespace SShopManagementSystem.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.OrderDetails")]
    [BasedOnRow(typeof(Entities.OrderDetailsRow), CheckNames = true)]
    public class OrderDetailsForm
    {
        //delete this property because we dont want to fill OrderId value manually
        //public Int32 OrderId { get; set; }
        public Int32 ProductId { get; set; }
        [ReadOnly(true)]
        public Decimal UnitPriceOrder { get; set; }
        public Int32 QuantityOrder { get; set; }
    }
}