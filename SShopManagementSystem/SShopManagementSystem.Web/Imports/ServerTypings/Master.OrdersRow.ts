namespace SShopManagementSystem.Master {
    export interface OrdersRow {
        OrderId?: number;
        DatetimeOrder?: string;
        CustomerId?: number;
        WorkerId?: number;
        CustomerIdName?: string;
        WorkerIdName?: string;
        OrderDetails?: OrderDetailsRow[];
        TotalAmount?: number;
    }

    export namespace OrdersRow {
        export const idProperty = 'OrderId';
        export const localTextPrefix = 'Master.Orders';
        export const lookupKey = 'Master.Orders';

        export function getLookup(): Q.Lookup<OrdersRow> {
            return Q.getLookup<OrdersRow>('Master.Orders');
        }
        export const deletePermission = 'Master:Purchasement:Delete';
        export const insertPermission = 'Master:Purchasement:Insert';
        export const readPermission = 'Master:Purchasement:Read';
        export const updatePermission = 'Master:Purchasement:Update';

        export declare const enum Fields {
            OrderId = "OrderId",
            DatetimeOrder = "DatetimeOrder",
            CustomerId = "CustomerId",
            WorkerId = "WorkerId",
            CustomerIdName = "CustomerIdName",
            WorkerIdName = "WorkerIdName",
            OrderDetails = "OrderDetails",
            TotalAmount = "TotalAmount"
        }
    }
}
