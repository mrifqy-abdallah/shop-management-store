namespace SShopManagementSystem.Master {
    export interface ProductVendorsRow {
        VendorId?: number;
        NameVendor?: string;
        LogoVendor?: string;
    }

    export namespace ProductVendorsRow {
        export const idProperty = 'VendorId';
        export const nameProperty = 'NameVendor';
        export const localTextPrefix = 'Master.ProductVendors';
        export const lookupKey = 'Master.ProductVendors';

        export function getLookup(): Q.Lookup<ProductVendorsRow> {
            return Q.getLookup<ProductVendorsRow>('Master.ProductVendors');
        }
        export const deletePermission = 'Master:Stockpile:Delete';
        export const insertPermission = 'Master:Stockpile:Insert';
        export const readPermission = 'Master:Stockpile:Read';
        export const updatePermission = 'Master:Stockpile:Update';

        export declare const enum Fields {
            VendorId = "VendorId",
            NameVendor = "NameVendor",
            LogoVendor = "LogoVendor"
        }
    }
}
