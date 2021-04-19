namespace SShopManagementSystem.Master {
    export interface WorkersForm {
        FullnameWorker: Serenity.StringEditor;
        NicknameWorker: Serenity.StringEditor;
        GenderWorker: Serenity.EnumEditor;
        DegreeWorker: Serenity.StringEditor;
        PhoneWorker: Serenity.StringEditor;
        EmailWorker: Serenity.EmailAddressEditor;
        StoreWorker: Serenity.LookupEditor;
        JobTitleWorker: Serenity.StringEditor;
    }

    export class WorkersForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Workers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WorkersForm.init)  {
                WorkersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;
                var w2 = s.EmailAddressEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(WorkersForm, [
                    'FullnameWorker', w0,
                    'NicknameWorker', w0,
                    'GenderWorker', w1,
                    'DegreeWorker', w0,
                    'PhoneWorker', w0,
                    'EmailWorker', w2,
                    'StoreWorker', w3,
                    'JobTitleWorker', w0
                ]);
            }
        }
    }
}
