namespace SShopManagementSystem.Master {
    export interface ProductsForm {
        NameProduct: Serenity.StringEditor;
        TypeId: Serenity.LookupEditor;
        VendorId: Serenity.LookupEditor;
        WeightProduct: Serenity.DecimalEditor;
        SizeProduct: Serenity.StringEditor;
        StockQuantityProduct: Serenity.IntegerEditor;
        BuyPriceProduct: Serenity.DecimalEditor;
        SalePriceProduct: Serenity.DecimalEditor;
    }

    export class ProductsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Products';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsForm.init)  {
                ProductsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(ProductsForm, [
                    'NameProduct', w0,
                    'TypeId', w1,
                    'VendorId', w1,
                    'WeightProduct', w2,
                    'SizeProduct', w0,
                    'StockQuantityProduct', w3,
                    'BuyPriceProduct', w2,
                    'SalePriceProduct', w2
                ]);
            }
        }
    }
}
