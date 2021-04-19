namespace SShopManagementSystem.Master {
    export interface ProductCategoriesForm {
        NameType: Serenity.StringEditor;
        DescriptionType: Serenity.TextAreaEditor;
    }

    export class ProductCategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Master.ProductCategories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductCategoriesForm.init)  {
                ProductCategoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(ProductCategoriesForm, [
                    'NameType', w0,
                    'DescriptionType', w1
                ]);
            }
        }
    }
}
