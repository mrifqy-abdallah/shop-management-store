namespace SShopManagementSystem.Master {
    export interface StoresForm {
        NameStore: Serenity.StringEditor;
        AddressLineStore: Serenity.TextAreaEditor;
        SubDistrictStore: Serenity.StringEditor;
        DistrictStore: Serenity.StringEditor;
        ProvinceStore: Serenity.StringEditor;
        PostalCodeStore: Serenity.StringEditor;
        PhoneStore: Serenity.StringEditor;
    }

    export class StoresForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Stores';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StoresForm.init)  {
                StoresForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(StoresForm, [
                    'NameStore', w0,
                    'AddressLineStore', w1,
                    'SubDistrictStore', w0,
                    'DistrictStore', w0,
                    'ProvinceStore', w0,
                    'PostalCodeStore', w0,
                    'PhoneStore', w0
                ]);
            }
        }
    }
}
