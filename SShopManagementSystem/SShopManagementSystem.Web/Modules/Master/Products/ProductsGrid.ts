
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey() { return 'Master.Products'; }
        protected getDialogType() { return ProductsDialog; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getInsertPermission() { return ProductsRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getService() { return ProductsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        //selecting the css class of StockQuantityProduct field
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            Q.first(columns, x => x.field == ProductsRow.Fields.StockQuantityProduct).cssClass += " col-stock-quantity-product";
            return columns;
        }

        //then setting special css for some specific condition
        protected getItemCssClass(item: Master.ProductsRow, index: number): string {
            let klass: string = "";

            if (item.StockQuantityProduct <= 0)
                klass += " out-of-stock";
            else if (item.StockQuantityProduct < 20)
                klass += " critical-stock";
            else if (item.StockQuantityProduct >= 20 && item.StockQuantityProduct <= 50)
                klass += " low-stock";

            return Q.trimToNull(klass);
        }
    }
}