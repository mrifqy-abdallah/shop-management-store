
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class ProductVendorsDialog extends Serenity.EntityDialog<ProductVendorsRow, any> {
        protected getFormKey() { return ProductVendorsForm.formKey; }
        protected getIdProperty() { return ProductVendorsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductVendorsRow.localTextPrefix; }
        protected getNameProperty() { return ProductVendorsRow.nameProperty; }
        protected getService() { return ProductVendorsService.baseUrl; }
        protected getDeletePermission() { return ProductVendorsRow.deletePermission; }
        protected getInsertPermission() { return ProductVendorsRow.insertPermission; }
        protected getUpdatePermission() { return ProductVendorsRow.updatePermission; }

        protected form = new ProductVendorsForm(this.idPrefix);

    }
}