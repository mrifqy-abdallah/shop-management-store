namespace SShopManagementSystem.Master {
    export interface ProductsRow {
        ProductId?: number;
        NameProduct?: string;
        TypeId?: number;
        VendorId?: number;
        TypeIdName?: string;
        VendorIdName?: string;
        WeightProduct?: number;
        SizeProduct?: string;
        StockQuantityProduct?: number;
        BuyPriceProduct?: number;
        SalePriceProduct?: number;
    }

    export namespace ProductsRow {
        export const idProperty = 'ProductId';
        export const nameProperty = 'NameProduct';
        export const localTextPrefix = 'Master.Products';
        export const lookupKey = 'Master.Products';

        export function getLookup(): Q.Lookup<ProductsRow> {
            return Q.getLookup<ProductsRow>('Master.Products');
        }
        export const deletePermission = 'Master:Stockpile:Delete';
        export const insertPermission = 'Master:Stockpile:Insert';
        export const readPermission = 'Master:Stockpile:Read';
        export const updatePermission = 'Master:Stockpile:Update';

        export declare const enum Fields {
            ProductId = "ProductId",
            NameProduct = "NameProduct",
            TypeId = "TypeId",
            VendorId = "VendorId",
            TypeIdName = "TypeIdName",
            VendorIdName = "VendorIdName",
            WeightProduct = "WeightProduct",
            SizeProduct = "SizeProduct",
            StockQuantityProduct = "StockQuantityProduct",
            BuyPriceProduct = "BuyPriceProduct",
            SalePriceProduct = "SalePriceProduct"
        }
    }
}
