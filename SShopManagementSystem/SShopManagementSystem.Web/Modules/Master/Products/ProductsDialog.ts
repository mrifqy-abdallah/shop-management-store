
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey() { return ProductsForm.formKey; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getNameProperty() { return ProductsRow.nameProperty; }
        protected getService() { return ProductsService.baseUrl; }
        protected getDeletePermission() { return ProductsRow.deletePermission; }
        protected getInsertPermission() { return ProductsRow.insertPermission; }
        protected getUpdatePermission() { return ProductsRow.updatePermission; }

        protected form = new ProductsForm(this.idPrefix);

        //adding another tab in Products module
        private productsPurchasedInGrid: ProductsPurchasedInGrid;

        constructor() {
            super();

            this.productsPurchasedInGrid = new ProductsPurchasedInGrid(this.byId("PurchasedInGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.productsPurchasedInGrid.productID = this.entityId;
        }


    }
}