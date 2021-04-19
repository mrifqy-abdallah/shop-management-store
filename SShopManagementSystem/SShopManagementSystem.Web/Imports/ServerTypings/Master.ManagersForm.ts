namespace SShopManagementSystem.Master {
    export interface ManagersForm {
        FullnameManager: Serenity.StringEditor;
        GenderManager: Serenity.EnumEditor;
        DegreeManager: Serenity.StringEditor;
        PhoneManager: Serenity.StringEditor;
        EmailManager: Serenity.EmailAddressEditor;
        StoreManager: Serenity.LookupEditor;
    }

    export class ManagersForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Managers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ManagersForm.init)  {
                ManagersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.EmailAddressEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(ManagersForm, [
                    'FullnameManager', w0,
                    'GenderManager', w1,
                    'DegreeManager', w0,
                    'PhoneManager', w0,
                    'EmailManager', w2,
                    'StoreManager', w3
                ]);
            }
        }
    }
}
