namespace SShopManagementSystem.Master {
    export interface OrderDetailsRow {
        OrderListId?: number;
        OrderId?: number;
        ProductId?: number;
        UnitPriceOrder?: number;
        QuantityOrder?: number;
        ProductIdName?: string;
        TotalPriceOfThisProduct?: number;
        OrderIdDatetime?: string;
    }

    export namespace OrderDetailsRow {
        export const idProperty = 'OrderListId';
        export const localTextPrefix = 'Master.OrderDetails';
        export const deletePermission = 'Master:Purchasement:Delete';
        export const insertPermission = 'Master:Purchasement:Insert';
        export const readPermission = 'Master:Purchasement:Read';
        export const updatePermission = 'Master:Purchasement:Update';

        export declare const enum Fields {
            OrderListId = "OrderListId",
            OrderId = "OrderId",
            ProductId = "ProductId",
            UnitPriceOrder = "UnitPriceOrder",
            QuantityOrder = "QuantityOrder",
            ProductIdName = "ProductIdName",
            TotalPriceOfThisProduct = "TotalPriceOfThisProduct",
            OrderIdDatetime = "OrderIdDatetime"
        }
    }
}
