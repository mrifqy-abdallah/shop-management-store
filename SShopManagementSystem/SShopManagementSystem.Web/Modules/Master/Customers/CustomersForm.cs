
namespace SShopManagementSystem.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Customers")]
    [BasedOnRow(typeof(Entities.CustomersRow), CheckNames = true)]
    public class CustomersForm
    {
        public String NameCustomer { get; set; }
        [TextAreaEditor(Rows = 5)]
        public String AddressCustomer { get; set; }
        public String PhoneCustomer { get; set; }
    }
}