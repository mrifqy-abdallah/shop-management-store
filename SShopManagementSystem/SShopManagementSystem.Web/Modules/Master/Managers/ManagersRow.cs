
using SShopManagementSystem.Web;

namespace SShopManagementSystem.Master.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Master"), TableName("managers")]
    [DisplayName("Managers"), InstanceName("Manager")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission(PermissionKeys.Managers.Read), InsertPermission(PermissionKeys.Managers.Insert)]
    [UpdatePermission(PermissionKeys.Managers.Update), DeletePermission(PermissionKeys.Managers.Delete)]
    [LookupScript("Master.Managers")]
    public sealed class ManagersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("manager_id"), Identity]
        public Int32? ManagerId
        {
            get { return Fields.ManagerId[this]; }
            set { Fields.ManagerId[this] = value; }
        }

        [DisplayName("Name"), Column("fullname_manager"), Size(40), NotNull, QuickSearch]
        public String FullnameManager
        {
            get { return Fields.FullnameManager[this]; }
            set { Fields.FullnameManager[this] = value; }
        }

        [DisplayName("Gender"), Column("gender_manager"), NotNull, QuickFilter]
        public ManagersGender? GenderManager
        {
            get { return (ManagersGender?)Fields.GenderManager[this]; }
            set { Fields.GenderManager[this] = (Int32?)value; }
        }

        [DisplayName("Degree"), Column("degree_manager"), NotNull, QuickSearch]
        public String DegreeManager
        {
            get { return Fields.DegreeManager[this]; }
            set { Fields.DegreeManager[this] = value; }
        }

        [DisplayName("Phone"), Column("phone_manager"), Size(20), NotNull]
        public String PhoneManager
        {
            get { return Fields.PhoneManager[this]; }
            set { Fields.PhoneManager[this] = value; }
        }

        [DisplayName("Email"), Column("email_manager"), Size(40), NotNull]
        public String EmailManager
        {
            get { return Fields.EmailManager[this]; }
            set { Fields.EmailManager[this] = value; }
        }

        [DisplayName("Store"), Column("store_manager"), NotNull, ForeignKey("stores", "store_id"), LeftJoin("JStore")]
        [LookupEditor("Master.Stores")]
        public Int32? StoreManager
        {
            get { return Fields.StoreManager[this]; }
            set { Fields.StoreManager[this] = value; }
        }

        [DisplayName("Store"), Expression("JStore.[name_store]"), QuickFilter]
        public String StoreManagerName
        {
            get { return Fields.StoreManagerName[this]; }
            set { Fields.StoreManagerName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ManagerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullnameManager; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ManagersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ManagerId;
            public StringField FullnameManager;
            public readonly Int32Field GenderManager;
            public StringField DegreeManager;
            public StringField PhoneManager;
            public StringField EmailManager;
            public Int32Field StoreManager;

            public StringField StoreManagerName;
        }
    }
}
