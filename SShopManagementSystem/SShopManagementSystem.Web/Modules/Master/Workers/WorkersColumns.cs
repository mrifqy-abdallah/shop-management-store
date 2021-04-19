
namespace SShopManagementSystem.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Workers")]
    [BasedOnRow(typeof(Entities.WorkersRow), CheckNames = true)]
    public class WorkersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 WorkerId { get; set; }
        [EditLink, SortOrder(1)]
        public String FullnameWorker { get; set; }
        public String NicknameWorker { get; set; }
        public Int32 GenderWorker { get; set; }
        public String DegreeWorker { get; set; }
        public String PhoneWorker { get; set; }
        public String EmailWorker { get; set; }
        public String StoreWorkerName { get; set; }

        public String JobTitleWorker { get; set; }
    }
}