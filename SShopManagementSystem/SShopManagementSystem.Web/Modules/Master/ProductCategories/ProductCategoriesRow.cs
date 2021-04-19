
namespace SShopManagementSystem.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("product_types")]
    [DisplayName("Product Categories"), InstanceName("Category")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission(PermissionKeys.Stockpile.Read), InsertPermission(PermissionKeys.Stockpile.Insert)]
    [UpdatePermission(PermissionKeys.Stockpile.Update), DeletePermission(PermissionKeys.Stockpile.Delete)]
    [LookupScript("Master.ProductCategories")]
    public sealed class ProductCategoriesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("type_id"), Identity]
        public Int32? TypeId
        {
            get { return Fields.TypeId[this]; }
            set { Fields.TypeId[this] = value; }
        }

        [DisplayName("Category"), Column("name_type"), Size(40), NotNull, QuickSearch]
        public String NameType
        {
            get { return Fields.NameType[this]; }
            set { Fields.NameType[this] = value; }
        }

        [DisplayName("Description"), Column("description_type"), QuickSearch]
        public String DescriptionType
        {
            get { return Fields.DescriptionType[this]; }
            set { Fields.DescriptionType[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NameType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductCategoriesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TypeId;
            public StringField NameType;
            public StringField DescriptionType;
        }
    }
}
