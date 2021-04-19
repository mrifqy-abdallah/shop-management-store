namespace SShopManagementSystem.Master {
    export interface ManagersRow {
        ManagerId?: number;
        FullnameManager?: string;
        GenderManager?: Web.ManagersGender;
        DegreeManager?: string;
        PhoneManager?: string;
        EmailManager?: string;
        StoreManager?: number;
        StoreManagerName?: string;
    }

    export namespace ManagersRow {
        export const idProperty = 'ManagerId';
        export const nameProperty = 'FullnameManager';
        export const localTextPrefix = 'Master.Managers';
        export const lookupKey = 'Master.Managers';

        export function getLookup(): Q.Lookup<ManagersRow> {
            return Q.getLookup<ManagersRow>('Master.Managers');
        }
        export const deletePermission = 'Master:Managers:Delete';
        export const insertPermission = 'Master:Managers:Insert';
        export const readPermission = 'Master:Managers:Read';
        export const updatePermission = 'Master:Managers:Update';

        export declare const enum Fields {
            ManagerId = "ManagerId",
            FullnameManager = "FullnameManager",
            GenderManager = "GenderManager",
            DegreeManager = "DegreeManager",
            PhoneManager = "PhoneManager",
            EmailManager = "EmailManager",
            StoreManager = "StoreManager",
            StoreManagerName = "StoreManagerName"
        }
    }
}
