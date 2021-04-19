namespace SShopManagementSystem.Master {
    export interface ProductCategoriesRow {
        TypeId?: number;
        NameType?: string;
        DescriptionType?: string;
    }

    export namespace ProductCategoriesRow {
        export const idProperty = 'TypeId';
        export const nameProperty = 'NameType';
        export const localTextPrefix = 'Master.ProductCategories';
        export const lookupKey = 'Master.ProductCategories';

        export function getLookup(): Q.Lookup<ProductCategoriesRow> {
            return Q.getLookup<ProductCategoriesRow>('Master.ProductCategories');
        }
        export const deletePermission = 'Master:Stockpile:Delete';
        export const insertPermission = 'Master:Stockpile:Insert';
        export const readPermission = 'Master:Stockpile:Read';
        export const updatePermission = 'Master:Stockpile:Update';

        export declare const enum Fields {
            TypeId = "TypeId",
            NameType = "NameType",
            DescriptionType = "DescriptionType"
        }
    }
}
