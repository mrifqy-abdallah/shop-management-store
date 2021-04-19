namespace SShopManagementSystem.Master {
    export interface OrdersForm {
        DatetimeOrder: Serenity.DateTimeEditor;
        CustomerId: Serenity.LookupEditor;
        WorkerId: Serenity.LookupEditor;
        OrderDetails: OrderDetailsEditor;
        TotalAmount: Serenity.DecimalEditor;
    }

    export class OrdersForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Orders';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrdersForm.init)  {
                OrdersForm.init = true;

                var s = Serenity;
                var w0 = s.DateTimeEditor;
                var w1 = s.LookupEditor;
                var w2 = OrderDetailsEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(OrdersForm, [
                    'DatetimeOrder', w0,
                    'CustomerId', w1,
                    'WorkerId', w1,
                    'OrderDetails', w2,
                    'TotalAmount', w3
                ]);
            }
        }
    }
}
