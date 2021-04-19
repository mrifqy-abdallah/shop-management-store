
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class ManagersGrid extends Serenity.EntityGrid<ManagersRow, any> {
        protected getColumnsKey() { return 'Master.Managers'; }
        protected getDialogType() { return ManagersDialog; }
        protected getIdProperty() { return ManagersRow.idProperty; }
        protected getInsertPermission() { return ManagersRow.insertPermission; }
        protected getLocalTextPrefix() { return ManagersRow.localTextPrefix; }
        protected getService() { return ManagersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        //these columns will be included in QuickSearch
        //we need to set QuickSearch attribute to columns below in Row as well
        protected getQuickSearchFields():
            Serenity.QuickSearchField[] {
            return [
                { name: "", title: "all" },
                { name: "FullnameManager", title: "name" },
                { name: "DegreeManager", title: "degree" }
            ]
        }
    }
}