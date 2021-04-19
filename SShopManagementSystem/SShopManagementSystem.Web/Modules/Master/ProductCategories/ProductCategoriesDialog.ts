
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class ProductCategoriesDialog extends Serenity.EntityDialog<ProductCategoriesRow, any> {
        protected getFormKey() { return ProductCategoriesForm.formKey; }
        protected getIdProperty() { return ProductCategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return ProductCategoriesRow.localTextPrefix; }
        protected getNameProperty() { return ProductCategoriesRow.nameProperty; }
        protected getService() { return ProductCategoriesService.baseUrl; }
        protected getDeletePermission() { return ProductCategoriesRow.deletePermission; }
        protected getInsertPermission() { return ProductCategoriesRow.insertPermission; }
        protected getUpdatePermission() { return ProductCategoriesRow.updatePermission; }

        protected form = new ProductCategoriesForm(this.idPrefix);

    }
}