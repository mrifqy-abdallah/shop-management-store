namespace SShopManagementSystem.Master {
    export interface WorkersRow {
        WorkerId?: number;
        FullnameWorker?: string;
        NicknameWorker?: string;
        GenderWorker?: Web.WorkersGender;
        DegreeWorker?: string;
        PhoneWorker?: string;
        EmailWorker?: string;
        StoreWorker?: number;
        JobTitleWorker?: string;
        StoreWorkerName?: string;
    }

    export namespace WorkersRow {
        export const idProperty = 'WorkerId';
        export const nameProperty = 'FullnameWorker';
        export const localTextPrefix = 'Master.Workers';
        export const lookupKey = 'Master.Workers';

        export function getLookup(): Q.Lookup<WorkersRow> {
            return Q.getLookup<WorkersRow>('Master.Workers');
        }
        export const deletePermission = 'Master:Workers:Delete';
        export const insertPermission = 'Master:Workers:Insert';
        export const readPermission = 'Master:Workers:Read';
        export const updatePermission = 'Master:Workers:Update';

        export declare const enum Fields {
            WorkerId = "WorkerId",
            FullnameWorker = "FullnameWorker",
            NicknameWorker = "NicknameWorker",
            GenderWorker = "GenderWorker",
            DegreeWorker = "DegreeWorker",
            PhoneWorker = "PhoneWorker",
            EmailWorker = "EmailWorker",
            StoreWorker = "StoreWorker",
            JobTitleWorker = "JobTitleWorker",
            StoreWorkerName = "StoreWorkerName"
        }
    }
}
