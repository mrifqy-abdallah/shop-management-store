
namespace SShopManagementSystem.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Stores")]
    [BasedOnRow(typeof(Entities.StoresRow), CheckNames = true)]
    public class StoresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StoreId { get; set; }
        [EditLink, SortOrder(1)]
        public String NameStore { get; set; }
        public String AddressLineStore { get; set; }
        public String SubDistrictStore { get; set; }
        public String DistrictStore { get; set; }
        public String ProvinceStore { get; set; }
        public String PostalCodeStore { get; set; }
        public String PhoneStore { get; set; }
    }
}