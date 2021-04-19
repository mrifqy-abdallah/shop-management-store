
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class ProductVendorsGrid extends Serenity.EntityGrid<ProductVendorsRow, any> {
        protected getColumnsKey() { return 'Master.ProductVendors'; }
        protected getDialogType() { return ProductVendorsDialog; }
        protected getIdProperty() { return ProductVendorsRow.idProperty; }
        protected getInsertPermission() { return ProductVendorsRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductVendorsRow.localTextPrefix; }
        protected getService() { return ProductVendorsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}