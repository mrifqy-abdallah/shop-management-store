namespace SShopManagementSystem.Master {
    declare namespace PermissionKeys {
        export const General = "Master:General";
        export const SuperManager = "Master:SuperManager";
        export const BranchManager = "Master:BranchManager";
        export const Worker = "Master:Worker";

        namespace Customers {
            export const Read = "Master:Customers:Read";
            export const Insert = "Master:Customers:Insert";
            export const Update = "Master:Customers:Update";
            export const Delete = "Master:Customers:Delete";
        }

        namespace Managers {
            export const Read = "Master:Managers:Read";
            export const Insert = "Master:Managers:Insert";
            export const Update = "Master:Managers:Update";
            export const Delete = "Master:Managers:Delete";
        }

        namespace Stores {
            export const Read = "Master:Stores:Read";
            export const Insert = "Master:Stores:Insert";
            export const Update = "Master:Stores:Update";
            export const Delete = "Master:Stores:Delete";
        }

        namespace Workers {
            export const Read = "Master:Workers:Read";
            export const Insert = "Master:Workers:Insert";
            export const Update = "Master:Workers:Update";
            export const Delete = "Master:Workers:Delete";
        }

        namespace Stockpile {
            export const Read = "Master:Stockpile:Read";
            export const Insert = "Master:Stockpile:Insert";
            export const Update = "Master:Stockpile:Update";
            export const Delete = "Master:Stockpile:Delete";
        }

        namespace Purchasement {
            export const Read = "Master:Purchasement:Read";
            export const Insert = "Master:Purchasement:Insert";
            export const Update = "Master:Purchasement:Update";
            export const Delete = "Master:Purchasement:Delete";
        }
    }
}
