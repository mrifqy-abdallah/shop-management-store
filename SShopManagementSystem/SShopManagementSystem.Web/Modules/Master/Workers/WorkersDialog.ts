
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class WorkersDialog extends Serenity.EntityDialog<WorkersRow, any> {
        protected getFormKey() { return WorkersForm.formKey; }
        protected getIdProperty() { return WorkersRow.idProperty; }
        protected getLocalTextPrefix() { return WorkersRow.localTextPrefix; }
        protected getNameProperty() { return WorkersRow.nameProperty; }
        protected getService() { return WorkersService.baseUrl; }
        protected getDeletePermission() { return WorkersRow.deletePermission; }
        protected getInsertPermission() { return WorkersRow.insertPermission; }
        protected getUpdatePermission() { return WorkersRow.updatePermission; }

        protected form = new WorkersForm(this.idPrefix);

    }
}