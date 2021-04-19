
namespace SShopManagementSystem.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SShopManagementSystem.Web;

    [FormScript("Master.Workers")]
    [BasedOnRow(typeof(Entities.WorkersRow), CheckNames = true)]
    public class WorkersForm
    {
        [Category("Personal Identity")]
        public String FullnameWorker { get; set; }
        public String NicknameWorker { get; set; }
        public WorkersGender GenderWorker { get; set; }

        public String DegreeWorker { get; set; }

        [Category("Contacts")]
        public String PhoneWorker { get; set; }
        [EmailAddressEditor]
        public String EmailWorker { get; set; }

        [Category("Job Information")]
        public Int32 StoreWorker { get; set; }
        public String JobTitleWorker { get; set; }
    }
}