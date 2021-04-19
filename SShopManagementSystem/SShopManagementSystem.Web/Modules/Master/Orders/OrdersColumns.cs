
namespace SShopManagementSystem.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Orders")]
    [BasedOnRow(typeof(Entities.OrdersRow), CheckNames = true)]
    public class OrdersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OrderId { get; set; }
        [EditLink]
        public String CustomerIdName { get; set; }
        //set DisplayFormat so the datetime will be shown in dd-MM-yyyy HH-mm
        //set SortOrder so the record of this table will be sorted as its DatetimeOrder (descendingly)
        [Width(150), DisplayFormat("g"), SortOrder(1, descending: true)]
        public DateTime DatetimeOrder { get; set; }
        public String WorkerIdName { get; set; }
    }
}