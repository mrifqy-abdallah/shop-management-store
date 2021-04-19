
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class ProductCategoriesGrid extends Serenity.EntityGrid<ProductCategoriesRow, any> {
        protected getColumnsKey() { return 'Master.ProductCategories'; }
        protected getDialogType() { return ProductCategoriesDialog; }
        protected getIdProperty() { return ProductCategoriesRow.idProperty; }
        protected getInsertPermission() { return ProductCategoriesRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductCategoriesRow.localTextPrefix; }
        protected getService() { return ProductCategoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickSearchFields():
            Serenity.QuickSearchField[] {
            return [
                { name: "", title: "all" },
                { name: "DescriptionType", title: "description"}
            ]
        }
    }
}