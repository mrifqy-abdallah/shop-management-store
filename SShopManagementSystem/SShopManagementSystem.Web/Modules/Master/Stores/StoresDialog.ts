
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class StoresDialog extends Serenity.EntityDialog<StoresRow, any> {
        protected getFormKey() { return StoresForm.formKey; }
        protected getIdProperty() { return StoresRow.idProperty; }
        protected getLocalTextPrefix() { return StoresRow.localTextPrefix; }
        protected getNameProperty() { return StoresRow.nameProperty; }
        protected getService() { return StoresService.baseUrl; }
        protected getDeletePermission() { return StoresRow.deletePermission; }
        protected getInsertPermission() { return StoresRow.insertPermission; }
        protected getUpdatePermission() { return StoresRow.updatePermission; }

        protected form = new StoresForm(this.idPrefix);

    }
}