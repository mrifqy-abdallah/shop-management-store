
namespace SShopManagementSystem.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("stores")]
    [DisplayName("Stores"), InstanceName("Store")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission(PermissionKeys.Stores.Read), InsertPermission(PermissionKeys.Stores.Insert)]
    [UpdatePermission(PermissionKeys.Stores.Update), DeletePermission(PermissionKeys.Stores.Delete)]
    [LookupScript("Master.Stores")]
    public sealed class StoresRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("store_id"), Identity]
        public Int32? StoreId
        {
            get { return Fields.StoreId[this]; }
            set { Fields.StoreId[this] = value; }
        }

        [DisplayName("Name"), Column("name_store"), Size(40), NotNull, QuickSearch]
        public String NameStore
        {
            get { return Fields.NameStore[this]; }
            set { Fields.NameStore[this] = value; }
        }

        [DisplayName("Address Line"), Column("address_line_store"), NotNull, QuickSearch]
        public String AddressLineStore
        {
            get { return Fields.AddressLineStore[this]; }
            set { Fields.AddressLineStore[this] = value; }
        }

        [DisplayName("Sub District"), Column("sub_district_store"), Size(40), NotNull, QuickSearch]
        public String SubDistrictStore
        {
            get { return Fields.SubDistrictStore[this]; }
            set { Fields.SubDistrictStore[this] = value; }
        }

        [DisplayName("District"), Column("district_store"), Size(40), NotNull, QuickSearch]
        public String DistrictStore
        {
            get { return Fields.DistrictStore[this]; }
            set { Fields.DistrictStore[this] = value; }
        }

        [DisplayName("Province"), Column("province_store"), Size(40), NotNull, QuickSearch]
        public String ProvinceStore
        {
            get { return Fields.ProvinceStore[this]; }
            set { Fields.ProvinceStore[this] = value; }
        }

        //QuickSearch attribute in this property will have a different conditional than the others
        //QuickSearch here will search records in postal_code_store with value started with particular text
        [DisplayName("Postal Code"), Column("postal_code_store"), Size(15), NotNull, QuickSearch(SearchType.StartsWith)]
        public String PostalCodeStore
        {
            get { return Fields.PostalCodeStore[this]; }
            set { Fields.PostalCodeStore[this] = value; }
        }

        [DisplayName("Phone Number"), Column("phone_store"), NotNull]
        public String PhoneStore
        {
            get { return Fields.PhoneStore[this]; }
            set { Fields.PhoneStore[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StoreId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NameStore; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StoresRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field StoreId;
            public StringField NameStore;
            public StringField AddressLineStore;
            public StringField SubDistrictStore;
            public StringField DistrictStore;
            public StringField ProvinceStore;
            public StringField PostalCodeStore;
            public StringField PhoneStore;
        }
    }
}
