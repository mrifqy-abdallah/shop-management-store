
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

    [ConnectionKey("Default"), Module("Master"), TableName("workers")]
    [DisplayName("Workers"), InstanceName("Worker")]
    //[ReadPermission("Administration:General")]
    //[ModifyPermission("Administration:General")]
    [ReadPermission(PermissionKeys.Workers.Read), InsertPermission(PermissionKeys.Workers.Insert)]
    [UpdatePermission(PermissionKeys.Workers.Update), DeletePermission(PermissionKeys.Workers.Delete)]
    [LookupScript("Master.Workers")]
    public sealed class WorkersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("worker_id"), Identity]
        public Int32? WorkerId
        {
            get { return Fields.WorkerId[this]; }
            set { Fields.WorkerId[this] = value; }
        }

        [DisplayName("Fullname"), Column("fullname_worker"), Size(40), NotNull, QuickSearch]
        public String FullnameWorker
        {
            get { return Fields.FullnameWorker[this]; }
            set { Fields.FullnameWorker[this] = value; }
        }

        [DisplayName("Nickname"), Column("nickname_worker"), Size(20), NotNull, QuickSearch]
        public String NicknameWorker
        {
            get { return Fields.NicknameWorker[this]; }
            set { Fields.NicknameWorker[this] = value; }
        }

        [DisplayName("Gender"), Column("gender_worker"), NotNull, QuickFilter]
        public WorkersGender? GenderWorker
        {
            get { return (WorkersGender?)Fields.GenderWorker[this]; }
            set { Fields.GenderWorker[this] = (Int32?)value; }
        }

        [DisplayName("Degree"), Column("degree_worker"), NotNull]
        public String DegreeWorker
        {
            get { return Fields.DegreeWorker[this]; }
            set { Fields.DegreeWorker[this] = value; }
        }

        [DisplayName("Phone"), Column("phone_worker"), Size(20), NotNull]
        public String PhoneWorker
        {
            get { return Fields.PhoneWorker[this]; }
            set { Fields.PhoneWorker[this] = value; }
        }

        [DisplayName("Email"), Column("email_worker"), Size(30), NotNull]
        public String EmailWorker
        {
            get { return Fields.EmailWorker[this]; }
            set { Fields.EmailWorker[this] = value; }
        }

        [DisplayName("Store"), Column("store_worker"), NotNull, ForeignKey("stores", "store_id"), LeftJoin("jStore")] 
        [LookupEditor("Master.Stores")]
        public Int32? StoreWorker
        {
            get { return Fields.StoreWorker[this]; }
            set { Fields.StoreWorker[this] = value; }
        }

        [DisplayName("Store"), Expression("jStore.[name_store]"), QuickFilter]
        public String StoreWorkerName
        {
            get { return Fields.StoreWorkerName[this]; }
            set { Fields.StoreWorkerName[this] = value; }
        }

        [DisplayName("Job Title"), Column("job_title_worker"), Size(20), NotNull]
        public String JobTitleWorker
        {
            get { return Fields.JobTitleWorker[this]; }
            set { Fields.JobTitleWorker[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.WorkerId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullnameWorker; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WorkersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WorkerId;
            public StringField FullnameWorker;
            public StringField NicknameWorker;

            public readonly Int32Field GenderWorker;

            public StringField DegreeWorker;
            public StringField PhoneWorker;
            public StringField EmailWorker;
            public Int32Field StoreWorker;
            public StringField JobTitleWorker;

            public StringField StoreWorkerName;
        }
    }
}
