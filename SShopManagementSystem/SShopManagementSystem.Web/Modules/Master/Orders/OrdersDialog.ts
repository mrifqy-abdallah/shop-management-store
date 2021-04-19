
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class OrdersDialog extends Serenity.EntityDialog<OrdersRow, any> {
        protected getFormKey() { return OrdersForm.formKey; }
        protected getIdProperty() { return OrdersRow.idProperty; }
        protected getLocalTextPrefix() { return OrdersRow.localTextPrefix; }
        protected getService() { return OrdersService.baseUrl; }
        protected getDeletePermission() { return OrdersRow.deletePermission; }
        protected getInsertPermission() { return OrdersRow.insertPermission; }
        protected getUpdatePermission() { return OrdersRow.updatePermission; }

        protected form = new OrdersForm(this.idPrefix);

        constructor() {
            super();

            //calculate the total amount of an order
            //everytime a product is being added into basket, the value of TotalAmount will be summed up
            //use onRowCountChanged instead of onDataChanged
            (this.form.OrderDetails.view as any).onRowCountChanged.subscribe(() => {
                var total = 0;
                for (var l of this.form.OrderDetails.getItems()) {
                    total += l.TotalPriceOfThisProduct || 0;
                }
                this.form.TotalAmount.value = total;
            });
        }

        //removing delete button from dialog
        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            return buttons;
        }
    }
}