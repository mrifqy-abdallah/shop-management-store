/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class OrderDetailsEditDialog extends Common.GridEditorDialog<OrderDetailsRow> {
        protected getFormKey() { return OrderDetailsForm.formKey; }
        protected getNameProperty() { return OrderDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return OrderDetailsRow.localTextPrefix; }

        protected form: OrderDetailsForm;

        constructor() {
            super();
            this.form = new OrderDetailsForm(this.idPrefix);

            var quantityStockpile;

            //get product's price and store it to form when a product is selected
            this.form.ProductId.changeSelect2(e => {
                var productId = Q.toId(this.form.ProductId.value);
                if (productId != null) {
                    this.form.UnitPriceOrder.value = ProductsRow.getLookup().itemById[productId].SalePriceProduct;
                    //get the quantity of current product in stockpile
                    quantityStockpile = ProductsRow.getLookup().itemById[productId].StockQuantityProduct;
                }
            });

            //make sure the quantity of ordered product is not higher than its stock
            this.form.QuantityOrder.addValidationRule(this.uniqueName, e => {
                //if stock is empty, 
                if (quantityStockpile == null || quantityStockpile == 0) {
                    return "This product is out of stock!";
                }
                //if the quantity of ordered product is higher than its stock,
                var quantityOrder = this.form.QuantityOrder.value;
                if (quantityOrder > quantityStockpile) {
                    return "Only " + quantityStockpile + " of this product are left in stock!";
                }
            });
        }
    }
}