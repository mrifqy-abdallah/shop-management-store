
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class ManagersDialog extends Serenity.EntityDialog<ManagersRow, any> {
        protected getFormKey() { return ManagersForm.formKey; }
        protected getIdProperty() { return ManagersRow.idProperty; }
        protected getLocalTextPrefix() { return ManagersRow.localTextPrefix; }
        protected getNameProperty() { return ManagersRow.nameProperty; }
        protected getService() { return ManagersService.baseUrl; }
        protected getDeletePermission() { return ManagersRow.deletePermission; }
        protected getInsertPermission() { return ManagersRow.insertPermission; }
        protected getUpdatePermission() { return ManagersRow.updatePermission; }

        protected form = new ManagersForm(this.idPrefix);

    }
}