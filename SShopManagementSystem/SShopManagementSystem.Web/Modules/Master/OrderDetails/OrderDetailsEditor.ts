
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SShopManagementSystem.Master {
    @Serenity.Decorators.registerEditor()
    export class OrderDetailsEditor
        extends Common.GridEditorBase<OrderDetailsRow> {
        protected getColumnsKey() { return "Master.OrderDetails"; }
        protected getLocalTextPrefix() { return OrderDetailsRow.localTextPrefix; }

        protected getDialogType() { return OrderDetailsEditDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Add a Product";
        }

        protected validateEntity(row: OrderDetailsRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            //check if a product is already selected
            row.ProductId = Q.toId(row.ProductId);
            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This product is already in order!');
                return false;
            }

            //find the name of a product after being selected then store it to grid
            row.ProductIdName = ProductsRow.getLookup().itemById[row.ProductId].NameProduct;
            //calculate total line of one product's purchasement then store it to grid
            row.TotalPriceOfThisProduct = (row.UnitPriceOrder || 0) * (row.QuantityOrder || 0);

            return true;
        }
    }
}