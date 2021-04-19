
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

    [FormScript("Master.Managers")]
    [BasedOnRow(typeof(Entities.ManagersRow), CheckNames = true)]
    public class ManagersForm
    {
        [Category("Personal Identity")]
        public String FullnameManager { get; set; }
        public ManagersGender GenderManager { get; set; }

        public String DegreeManager { get; set; }

        [Category("Contacts")]
        public String PhoneManager { get; set; }
        [EmailAddressEditor]
        public String EmailManager { get; set; }

        [Category("Workplace")]
        public Int32 StoreManager { get; set; }
    }
}