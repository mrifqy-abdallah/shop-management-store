namespace SShopManagementSystem.Master {
    export interface CustomersForm {
        NameCustomer: Serenity.StringEditor;
        AddressCustomer: Serenity.TextAreaEditor;
        PhoneCustomer: Serenity.StringEditor;
    }

    export class CustomersForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Customers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomersForm.init)  {
                CustomersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(CustomersForm, [
                    'NameCustomer', w0,
                    'AddressCustomer', w1,
                    'PhoneCustomer', w0
                ]);
            }
        }
    }
}
