namespace SShopManagementSystem.Master {
    export interface ProductVendorsForm {
        NameVendor: Serenity.StringEditor;
        LogoVendor: Serenity.ImageUploadEditor;
    }

    export class ProductVendorsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.ProductVendors';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductVendorsForm.init)  {
                ProductVendorsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;

                Q.initFormType(ProductVendorsForm, [
                    'NameVendor', w0,
                    'LogoVendor', w1
                ]);
            }
        }
    }
}
