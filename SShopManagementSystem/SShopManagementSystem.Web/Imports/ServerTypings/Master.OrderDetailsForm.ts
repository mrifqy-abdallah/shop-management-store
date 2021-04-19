﻿namespace SShopManagementSystem.Master {
    export interface OrderDetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitPriceOrder: Serenity.DecimalEditor;
        QuantityOrder: Serenity.IntegerEditor;
    }

    export class OrderDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Master.OrderDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderDetailsForm.init)  {
                OrderDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(OrderDetailsForm, [
                    'ProductId', w0,
                    'UnitPriceOrder', w1,
                    'QuantityOrder', w2
                ]);
            }
        }
    }
}
