
namespace SShopManagementSystem.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Managers")]
    [BasedOnRow(typeof(Entities.ManagersRow), CheckNames = true)]
    public class ManagersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ManagerId { get; set; }
        [EditLink, SortOrder(1)]
        public String FullnameManager { get; set; }
        public Int32 GenderManager { get; set; }
        public String DegreeManager { get; set; }
        public String PhoneManager { get; set; }
        public String EmailManager { get; set; }
        public String StoreManagerName { get; set; }
    }
}