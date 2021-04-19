
namespace SShopManagementSystem.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("products")]
    [DisplayName("Products"), InstanceName("Product")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission(PermissionKeys.Stockpile.Read), InsertPermission(PermissionKeys.Stockpile.Insert)]
    [UpdatePermission(PermissionKeys.Stockpile.Update), DeletePermission(PermissionKeys.Stockpile.Delete)]
    [LookupScript("Master.Products")]
    public sealed class ProductsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("product_id"), Identity]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Name"), Column("name_product"), Size(40), NotNull, QuickSearch]
        public String NameProduct
        {
            get { return Fields.NameProduct[this]; }
            set { Fields.NameProduct[this] = value; }
        }

        [DisplayName("Category"), Column("type_id"), NotNull, ForeignKey("product_types", "type_id"), LeftJoin("JType")]
        [LookupEditor("Master.ProductCategories", InplaceAdd = true)]
        public Int32? TypeId
        {
            get { return Fields.TypeId[this]; }
            set { Fields.TypeId[this] = value; }
        }

        [DisplayName("Category"), Expression("JType.[name_type]"), QuickFilter]
        public String TypeIdName
        {
            get { return Fields.TypeIdName[this]; }
            set { Fields.TypeIdName[this] = value; }
        }

        [DisplayName("Vendor"), Column("vendor_id"), NotNull, ForeignKey("product_vendors", "vendor_id"), LeftJoin("JVendor")]
        [LookupEditor("Master.ProductVendors", InplaceAdd = true)]
        public Int32? VendorId
        {
            get { return Fields.VendorId[this]; }
            set { Fields.VendorId[this] = value; }
        }

        [DisplayName("Vendor"), Expression("JVendor.[name_vendor]"), QuickFilter]
        public String VendorIdName
        {
            get { return Fields.VendorIdName[this]; }
            set { Fields.VendorIdName[this] = value; }
        }

        [DisplayName("Weight (gr)"), Column("weight_product"), NotNull]
        public Double? WeightProduct
        {
            get { return Fields.WeightProduct[this]; }
            set { Fields.WeightProduct[this] = value; }
        }

        [DisplayName("Size/Dimention"), Column("size_product"), NotNull]
        public String SizeProduct
        {
            get { return Fields.SizeProduct[this]; }
            set { Fields.SizeProduct[this] = value; }
        }

        //set LookupInclude so this property will be included when Master.Products is being called with LookupEditor
        [DisplayName("Stock Quantity"), Column("stock_quantity_product"), LookupInclude]
        public Int32? StockQuantityProduct
        {
            get { return Fields.StockQuantityProduct[this]; }
            set { Fields.StockQuantityProduct[this] = value; }
        }

        [DisplayName("Buy Price"), Column("buy_price_product"), NotNull]
        public Decimal? BuyPriceProduct
        {
            get { return Fields.BuyPriceProduct[this]; }
            set { Fields.BuyPriceProduct[this] = value; }
        }

        [DisplayName("Sale Price"), Column("sale_price_product"), NotNull, LookupInclude]
        public Decimal? SalePriceProduct
        {
            get { return Fields.SalePriceProduct[this]; }
            set { Fields.SalePriceProduct[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NameProduct; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductId;
            public StringField NameProduct;
            public Int32Field TypeId;
            public Int32Field VendorId;
            
            public StringField TypeIdName;
            public StringField VendorIdName;

            public DoubleField WeightProduct;
            public StringField SizeProduct;
            public Int32Field StockQuantityProduct;
            public DecimalField BuyPriceProduct;
            public DecimalField SalePriceProduct;
        }
    }
}
