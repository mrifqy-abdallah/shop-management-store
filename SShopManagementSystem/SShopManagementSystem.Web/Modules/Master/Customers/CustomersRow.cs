
namespace SShopManagementSystem.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("customers")]
    [DisplayName("Customers"), InstanceName("Customer")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission(PermissionKeys.Customers.Read), InsertPermission(PermissionKeys.Customers.Insert)]
    [UpdatePermission(PermissionKeys.Customers.Update), DeletePermission(PermissionKeys.Customers.Delete)]
    [LookupScript("Master.Customers")]
    public sealed class CustomersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("customer_id"), Identity]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Name"), Column("name_customer"), Size(40), NotNull, QuickSearch]
        public String NameCustomer
        {
            get { return Fields.NameCustomer[this]; }
            set { Fields.NameCustomer[this] = value; }
        }

        [DisplayName("Address"), Column("address_customer")]
        public String AddressCustomer
        {
            get { return Fields.AddressCustomer[this]; }
            set { Fields.AddressCustomer[this] = value; }
        }

        [DisplayName("Phone Number"), Column("phone_customer")]
        public String PhoneCustomer
        {
            get { return Fields.PhoneCustomer[this]; }
            set { Fields.PhoneCustomer[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CustomerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NameCustomer; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CustomerId;
            public StringField NameCustomer;
            public StringField AddressCustomer;
            public StringField PhoneCustomer;
        }
    }
}
