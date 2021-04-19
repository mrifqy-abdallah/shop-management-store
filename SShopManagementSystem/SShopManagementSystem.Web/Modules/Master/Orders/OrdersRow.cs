
namespace SShopManagementSystem.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using System.Collections.Generic;

    [ConnectionKey("Default"), Module("Master"), TableName("orders")]
    [DisplayName("Purchasement"), InstanceName("Purchasement")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission(PermissionKeys.Purchasement.Read), InsertPermission(PermissionKeys.Purchasement.Insert)]
    [UpdatePermission(PermissionKeys.Purchasement.Update), DeletePermission(PermissionKeys.Purchasement.Delete)]
    [LookupScript("Master.Orders")]
    public sealed class OrdersRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("order_id"), Identity]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Date and Time"), Column("datetime_order"), NotNull, QuickFilter]
        public DateTime? DatetimeOrder
        {
            get { return Fields.DatetimeOrder[this]; }
            set { Fields.DatetimeOrder[this] = value; }
        }

        [DisplayName("Customer"), Column("customer_id"), NotNull, ForeignKey("customers", "customer_id"), LeftJoin("JCustomer")]
        [LookupEditor("Master.Customers", InplaceAdd = true), DefaultValue(1)]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Customer"), Expression("JCustomer.[name_customer]"), QuickSearch]
        public String CustomerIdName
        {
            get { return Fields.CustomerIdName[this]; }
            set { Fields.CustomerIdName[this] = value; }
        }

        [DisplayName("Worker"), Column("worker_id"), NotNull, ForeignKey("workers", "worker_id"), LeftJoin("JWorker")]
        [LookupEditor("Master.Workers")]
        public Int32? WorkerId
        {
            get { return Fields.WorkerId[this]; }
            set { Fields.WorkerId[this] = value; }
        }

        [DisplayName("Worker"), Expression("JWorker.[nickname_worker]"), QuickFilter]
        public String WorkerIdName
        {
            get { return Fields.WorkerIdName[this]; }
            set { Fields.WorkerIdName[this] = value; }
        }

        //this property is used for loading orderDetail module inside this module
        [MasterDetailRelation(foreignKey: "OrderId", IncludeColumns = "ProductIdName"), NotMapped]
        public List<OrderDetailsRow> OrderDetails
        {
            get { return Fields.OrderDetails[this]; }
            set { Fields.OrderDetails[this] = value; }
        }

        //expression attribute below is equal to this query
        //SELECT SUM(unit_price_order* quantity_order) FROM order_list AS T1 INNER JOIN orders AS T0 USING(order_id) WHERE order_id = X
        //X adalah order_id dari record order yang dipilih alias sedang dibuka
        //this property is made for calculating the total amount of one purchasement
        [Expression("(SELECT SUM(unit_price_order * quantity_order) FROM [order_list] AS T1 WHERE T0.order_id = T1.order_id)")]
        [DisplayName("Total Amount")]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrdersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderId;
            public DateTimeField DatetimeOrder;
            public Int32Field CustomerId;
            public Int32Field WorkerId;
            
            public StringField CustomerIdName;
            public StringField WorkerIdName;
            public readonly RowListField<OrderDetailsRow> OrderDetails;
            public DecimalField TotalAmount;
        }
    }
}
