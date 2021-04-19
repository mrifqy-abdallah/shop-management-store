
namespace SShopManagementSystem.Master {

    @Serenity.Decorators.registerClass()
    export class StoresGrid extends Serenity.EntityGrid<StoresRow, any> {
        protected getColumnsKey() { return 'Master.Stores'; }
        protected getDialogType() { return StoresDialog; }
        protected getIdProperty() { return StoresRow.idProperty; }
        protected getInsertPermission() { return StoresRow.insertPermission; }
        protected getLocalTextPrefix() { return StoresRow.localTextPrefix; }
        protected getService() { return StoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickSearchFields():
            Serenity.QuickSearchField[] {
            return [
                { name: "", title: "all" },
                { name: "AddressLineStore", title: "address line"},
                { name: "SubDistrictStore", title: "sub-district" },
                { name: "DistrictStore", title: "district" },
                { name: "ProvinceStore", title: "province" },
                { name: "PostalCodeStore", title: "postal code"}
            ]
        }

        //make new buttons
        getButtons() {
            var buttons = super.getButtons();

            //a button for exporting table to Excel
            buttons.push(SShopManagementSystem.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: StoresService.baseUrl + '/ListExcel',
                hint: "Export to Excel",
                separator: true
            }));

            //and a button for exporting table to Pdf
            buttons.push(SShopManagementSystem.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                hint: "Export to Pdf",
                fileName: "Stores"
            }));

            return buttons;
        }

    }
}