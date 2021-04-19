
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class WorkersGrid extends Serenity.EntityGrid<WorkersRow, any> {
        protected getColumnsKey() { return 'Master.Workers'; }
        protected getDialogType() { return WorkersDialog; }
        protected getIdProperty() { return WorkersRow.idProperty; }
        protected getInsertPermission() { return WorkersRow.insertPermission; }
        protected getLocalTextPrefix() { return WorkersRow.localTextPrefix; }
        protected getService() { return WorkersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickSearchFields():
            Serenity.QuickSearchField[] {
            return [
                { name: "", title: "all" },
                { name: "FullnameWorker", title: "fullname" },
                { name: "NicknameWorker", title: "nickname" },
                { name: "DegreeWorker", title: "degree" }
            ]
        }
    }
}