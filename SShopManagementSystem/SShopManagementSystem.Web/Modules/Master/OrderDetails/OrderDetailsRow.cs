
namespace SShopManagementSystem.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("order_list")]
    [DisplayName("Order Details"), InstanceName("")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission(PermissionKeys.Purchasement.Read), InsertPermission(PermissionKeys.Purchasement.Insert)]
    [UpdatePermission(PermissionKeys.Purchasement.Update), DeletePermission(PermissionKeys.Purchasement.Delete)]
    public sealed class OrderDetailsRow : Row, IIdRow
    {
        [DisplayName("Order List Id"), Column("order_list_id"), Identity]
        public Int32? OrderListId
        {
            get { return Fields.OrderListId[this]; }
            set { Fields.OrderListId[this] = value; }
        }

        [DisplayName("Order Id"), Column("order_id"), NotNull, ForeignKey("orders", "order_id"), LeftJoin("JOrder")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        //need this property to be called in ProductsPurchasedInColumns.cs.
        [Expression("JOrder.[datetime_order]")]
        public DateTime? OrderIdDatetime
        {
            get { return Fields.OrderIdDatetime[this]; }
            set { Fields.OrderIdDatetime[this] = value; }
        }

        [DisplayName("Product"), Column("product_id"), NotNull, ForeignKey("products", "product_id"), LeftJoin("JProduct")]
        [LookupEditor("Master.Products")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Product"), Expression("JProduct.[name_product]")]
        public String ProductIdName
        {
            get { return Fields.ProductIdName[this]; }
            set { Fields.ProductIdName[this] = value; }
        }

        [DisplayName("Unit Price"), Column("unit_price_order"), NotNull, DefaultValue(0)]
        public Decimal? UnitPriceOrder
        {
            get { return Fields.UnitPriceOrder[this]; }
            set { Fields.UnitPriceOrder[this] = value; }
        }

        [DisplayName("Quantity"), Column("quantity_order"), NotNull]
        public Int32? QuantityOrder
        {
            get { return Fields.QuantityOrder[this]; }
            set { Fields.QuantityOrder[this] = value; }
        }

        //need this property so we can see the total price of one product that is purchased
        //the value of this property will not be saved in any table
        [DisplayName("Total"), Expression("(T0.[unit_price_order] * T0.[quantity_order])")]
        [MinSelectLevel(SelectLevel.List)]
        public Decimal? TotalPriceOfThisProduct
        {
            get { return Fields.TotalPriceOfThisProduct[this]; }
            set { Fields.TotalPriceOfThisProduct[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderListId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderListId;
            public Int32Field OrderId;
            public Int32Field ProductId;
            public DecimalField UnitPriceOrder;
            public Int32Field QuantityOrder;

            public StringField ProductIdName;
            public DecimalField TotalPriceOfThisProduct;
            public DateTimeField OrderIdDatetime;

        }
    }
}
