
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class ProductsPurchasedInGrid extends Serenity.EntityGrid<OrderDetailsRow, any> {
        protected getColumnsKey() { return 'Master.ProductsPurchasedIn'; }
        protected getIdProperty() { return OrderDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return OrderDetailsRow.localTextPrefix; }
        protected getService() { return OrderDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            return null;
        }

        protected getInitialTitle() {
            return null;
        }

        protected usePager() {
            return false;
        }

        protected getGridCanLoad() {
            return this.productID != null;
        }

        private _productID: number;

        get productID() {
            return this._productID;
        }

        set productID(value: number) {
            if (this._productID != value) {
                this._productID = value;
                this.setEquality(OrderDetailsRow.Fields.ProductId, value);
                this.refresh();
            }
        }
    }

}