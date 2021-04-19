
namespace SShopManagementSystem.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("product_vendors")]
    [DisplayName("Vendors"), InstanceName("Vendor")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission(PermissionKeys.Stockpile.Read), InsertPermission(PermissionKeys.Stockpile.Insert)]
    [UpdatePermission(PermissionKeys.Stockpile.Update), DeletePermission(PermissionKeys.Stockpile.Delete)]
    [LookupScript("Master.ProductVendors")]
    public sealed class ProductVendorsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("vendor_id"), Identity]
        public Int32? VendorId
        {
            get { return Fields.VendorId[this]; }
            set { Fields.VendorId[this] = value; }
        }

        [DisplayName("Name"), Column("name_vendor"), Size(40), NotNull, QuickSearch]
        public String NameVendor
        {
            get { return Fields.NameVendor[this]; }
            set { Fields.NameVendor[this] = value; }
        }

        [DisplayName("Logo"), Column("logo_vendor")]
        [Size(100), ImageUploadEditor(FilenameFormat = "VendorsLogos/~")]
        public String LogoVendor
        {
            get { return Fields.LogoVendor[this]; }
            set { Fields.LogoVendor[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.VendorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NameVendor; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductVendorsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VendorId;
            public StringField NameVendor;
            public StringField LogoVendor;
        }
    }
}
