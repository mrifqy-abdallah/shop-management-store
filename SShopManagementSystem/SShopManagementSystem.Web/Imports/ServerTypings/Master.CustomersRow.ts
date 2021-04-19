namespace SShopManagementSystem.Master {
    export interface CustomersRow {
        CustomerId?: number;
        NameCustomer?: string;
        AddressCustomer?: string;
        PhoneCustomer?: string;
    }

    export namespace CustomersRow {
        export const idProperty = 'CustomerId';
        export const nameProperty = 'NameCustomer';
        export const localTextPrefix = 'Master.Customers';
        export const lookupKey = 'Master.Customers';

        export function getLookup(): Q.Lookup<CustomersRow> {
            return Q.getLookup<CustomersRow>('Master.Customers');
        }
        export const deletePermission = 'Master:Customers:Delete';
        export const insertPermission = 'Master:Customers:Insert';
        export const readPermission = 'Master:Customers:Read';
        export const updatePermission = 'Master:Customers:Update';

        export declare const enum Fields {
            CustomerId = "CustomerId",
            NameCustomer = "NameCustomer",
            AddressCustomer = "AddressCustomer",
            PhoneCustomer = "PhoneCustomer"
        }
    }
}
