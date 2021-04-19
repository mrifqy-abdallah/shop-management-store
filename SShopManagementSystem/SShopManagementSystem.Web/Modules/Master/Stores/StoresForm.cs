
namespace SShopManagementSystem.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Stores")]
    [BasedOnRow(typeof(Entities.StoresRow), CheckNames = true)]
    public class StoresForm
    {
        [Category("General Information")]
        public String NameStore { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String AddressLineStore { get; set; }
        public String SubDistrictStore { get; set; }
        public String DistrictStore { get; set; }
        public String ProvinceStore { get; set; }
        public String PostalCodeStore { get; set; }

        [Category("Office Contact")]
        public String PhoneStore { get; set; }
    }
}