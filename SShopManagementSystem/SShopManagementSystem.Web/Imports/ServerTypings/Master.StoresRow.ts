namespace SShopManagementSystem.Master {
    export interface StoresRow {
        StoreId?: number;
        NameStore?: string;
        AddressLineStore?: string;
        SubDistrictStore?: string;
        DistrictStore?: string;
        ProvinceStore?: string;
        PostalCodeStore?: string;
        PhoneStore?: string;
    }

    export namespace StoresRow {
        export const idProperty = 'StoreId';
        export const nameProperty = 'NameStore';
        export const localTextPrefix = 'Master.Stores';
        export const lookupKey = 'Master.Stores';

        export function getLookup(): Q.Lookup<StoresRow> {
            return Q.getLookup<StoresRow>('Master.Stores');
        }
        export const deletePermission = 'Master:Stores:Delete';
        export const insertPermission = 'Master:Stores:Insert';
        export const readPermission = 'Master:Stores:Read';
        export const updatePermission = 'Master:Stores:Update';

        export declare const enum Fields {
            StoreId = "StoreId",
            NameStore = "NameStore",
            AddressLineStore = "AddressLineStore",
            SubDistrictStore = "SubDistrictStore",
            DistrictStore = "DistrictStore",
            ProvinceStore = "ProvinceStore",
            PostalCodeStore = "PostalCodeStore",
            PhoneStore = "PhoneStore"
        }
    }
}
