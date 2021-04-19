/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace SShopManagementSystem.Administration {
}
declare namespace SShopManagementSystem.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
}
declare namespace SShopManagementSystem.Administration {
}
declare namespace SShopManagementSystem.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SShopManagementSystem.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SShopManagementSystem.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SShopManagementSystem.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace SShopManagementSystem.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace SShopManagementSystem.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace SShopManagementSystem.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace SShopManagementSystem.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace SShopManagementSystem.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SShopManagementSystem.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SShopManagementSystem.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SShopManagementSystem.Administration {
}
declare namespace SShopManagementSystem.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SShopManagementSystem.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SShopManagementSystem.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SShopManagementSystem.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SShopManagementSystem.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SShopManagementSystem.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace SShopManagementSystem.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace SShopManagementSystem.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace SShopManagementSystem.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace SShopManagementSystem.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace SShopManagementSystem.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace SShopManagementSystem.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace SShopManagementSystem {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace SShopManagementSystem {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace SShopManagementSystem {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace SShopManagementSystem {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
    interface CustomersForm {
        NameCustomer: Serenity.StringEditor;
        AddressCustomer: Serenity.TextAreaEditor;
        PhoneCustomer: Serenity.StringEditor;
    }
    class CustomersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Master {
    interface CustomersRow {
        CustomerId?: number;
        NameCustomer?: string;
        AddressCustomer?: string;
        PhoneCustomer?: string;
    }
    namespace CustomersRow {
        const idProperty = "CustomerId";
        const nameProperty = "NameCustomer";
        const localTextPrefix = "Master.Customers";
        const lookupKey = "Master.Customers";
        function getLookup(): Q.Lookup<CustomersRow>;
        const deletePermission = "Master:Customers:Delete";
        const insertPermission = "Master:Customers:Insert";
        const readPermission = "Master:Customers:Read";
        const updatePermission = "Master:Customers:Update";
        const enum Fields {
            CustomerId = "CustomerId",
            NameCustomer = "NameCustomer",
            AddressCustomer = "AddressCustomer",
            PhoneCustomer = "PhoneCustomer"
        }
    }
}
declare namespace SShopManagementSystem.Master {
    namespace CustomersService {
        const baseUrl = "Master/Customers";
        function Create(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Customers/Create",
            Update = "Master/Customers/Update",
            Delete = "Master/Customers/Delete",
            Retrieve = "Master/Customers/Retrieve",
            List = "Master/Customers/List"
        }
    }
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
    interface ManagersForm {
        FullnameManager: Serenity.StringEditor;
        GenderManager: Serenity.EnumEditor;
        DegreeManager: Serenity.StringEditor;
        PhoneManager: Serenity.StringEditor;
        EmailManager: Serenity.EmailAddressEditor;
        StoreManager: Serenity.LookupEditor;
    }
    class ManagersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Master {
    interface ManagersRow {
        ManagerId?: number;
        FullnameManager?: string;
        GenderManager?: Web.ManagersGender;
        DegreeManager?: string;
        PhoneManager?: string;
        EmailManager?: string;
        StoreManager?: number;
        StoreManagerName?: string;
    }
    namespace ManagersRow {
        const idProperty = "ManagerId";
        const nameProperty = "FullnameManager";
        const localTextPrefix = "Master.Managers";
        const lookupKey = "Master.Managers";
        function getLookup(): Q.Lookup<ManagersRow>;
        const deletePermission = "Master:Managers:Delete";
        const insertPermission = "Master:Managers:Insert";
        const readPermission = "Master:Managers:Read";
        const updatePermission = "Master:Managers:Update";
        const enum Fields {
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
declare namespace SShopManagementSystem.Master {
    namespace ManagersService {
        const baseUrl = "Master/Managers";
        function Create(request: Serenity.SaveRequest<ManagersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ManagersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ManagersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ManagersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Managers/Create",
            Update = "Master/Managers/Update",
            Delete = "Master/Managers/Delete",
            Retrieve = "Master/Managers/Retrieve",
            List = "Master/Managers/List"
        }
    }
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
    interface OrderDetailsForm {
        ProductId: Serenity.LookupEditor;
        UnitPriceOrder: Serenity.DecimalEditor;
        QuantityOrder: Serenity.IntegerEditor;
    }
    class OrderDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Master {
    interface OrderDetailsRow {
        OrderListId?: number;
        OrderId?: number;
        ProductId?: number;
        UnitPriceOrder?: number;
        QuantityOrder?: number;
        ProductIdName?: string;
        TotalPriceOfThisProduct?: number;
        OrderIdDatetime?: string;
    }
    namespace OrderDetailsRow {
        const idProperty = "OrderListId";
        const localTextPrefix = "Master.OrderDetails";
        const deletePermission = "Master:Purchasement:Delete";
        const insertPermission = "Master:Purchasement:Insert";
        const readPermission = "Master:Purchasement:Read";
        const updatePermission = "Master:Purchasement:Update";
        const enum Fields {
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
declare namespace SShopManagementSystem.Master {
    namespace OrderDetailsService {
        const baseUrl = "Master/OrderDetails";
        function Create(request: Serenity.SaveRequest<OrderDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/OrderDetails/Create",
            Update = "Master/OrderDetails/Update",
            Delete = "Master/OrderDetails/Delete",
            Retrieve = "Master/OrderDetails/Retrieve",
            List = "Master/OrderDetails/List"
        }
    }
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
    interface OrdersForm {
        DatetimeOrder: Serenity.DateTimeEditor;
        CustomerId: Serenity.LookupEditor;
        WorkerId: Serenity.LookupEditor;
        OrderDetails: OrderDetailsEditor;
        TotalAmount: Serenity.DecimalEditor;
    }
    class OrdersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Master {
    interface OrdersRow {
        OrderId?: number;
        DatetimeOrder?: string;
        CustomerId?: number;
        WorkerId?: number;
        CustomerIdName?: string;
        WorkerIdName?: string;
        OrderDetails?: OrderDetailsRow[];
        TotalAmount?: number;
    }
    namespace OrdersRow {
        const idProperty = "OrderId";
        const localTextPrefix = "Master.Orders";
        const lookupKey = "Master.Orders";
        function getLookup(): Q.Lookup<OrdersRow>;
        const deletePermission = "Master:Purchasement:Delete";
        const insertPermission = "Master:Purchasement:Insert";
        const readPermission = "Master:Purchasement:Read";
        const updatePermission = "Master:Purchasement:Update";
        const enum Fields {
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
declare namespace SShopManagementSystem.Master {
    namespace OrdersService {
        const baseUrl = "Master/Orders";
        function Create(request: Serenity.SaveRequest<OrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrdersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrdersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Orders/Create",
            Update = "Master/Orders/Update",
            Delete = "Master/Orders/Delete",
            Retrieve = "Master/Orders/Retrieve",
            List = "Master/Orders/List"
        }
    }
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
    interface ProductCategoriesForm {
        NameType: Serenity.StringEditor;
        DescriptionType: Serenity.TextAreaEditor;
    }
    class ProductCategoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Master {
    interface ProductCategoriesRow {
        TypeId?: number;
        NameType?: string;
        DescriptionType?: string;
    }
    namespace ProductCategoriesRow {
        const idProperty = "TypeId";
        const nameProperty = "NameType";
        const localTextPrefix = "Master.ProductCategories";
        const lookupKey = "Master.ProductCategories";
        function getLookup(): Q.Lookup<ProductCategoriesRow>;
        const deletePermission = "Master:Stockpile:Delete";
        const insertPermission = "Master:Stockpile:Insert";
        const readPermission = "Master:Stockpile:Read";
        const updatePermission = "Master:Stockpile:Update";
        const enum Fields {
            TypeId = "TypeId",
            NameType = "NameType",
            DescriptionType = "DescriptionType"
        }
    }
}
declare namespace SShopManagementSystem.Master {
    namespace ProductCategoriesService {
        const baseUrl = "Master/ProductCategories";
        function Create(request: Serenity.SaveRequest<ProductCategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductCategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductCategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductCategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/ProductCategories/Create",
            Update = "Master/ProductCategories/Update",
            Delete = "Master/ProductCategories/Delete",
            Retrieve = "Master/ProductCategories/Retrieve",
            List = "Master/ProductCategories/List"
        }
    }
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
    interface ProductVendorsForm {
        NameVendor: Serenity.StringEditor;
        LogoVendor: Serenity.ImageUploadEditor;
    }
    class ProductVendorsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Master {
    interface ProductVendorsRow {
        VendorId?: number;
        NameVendor?: string;
        LogoVendor?: string;
    }
    namespace ProductVendorsRow {
        const idProperty = "VendorId";
        const nameProperty = "NameVendor";
        const localTextPrefix = "Master.ProductVendors";
        const lookupKey = "Master.ProductVendors";
        function getLookup(): Q.Lookup<ProductVendorsRow>;
        const deletePermission = "Master:Stockpile:Delete";
        const insertPermission = "Master:Stockpile:Insert";
        const readPermission = "Master:Stockpile:Read";
        const updatePermission = "Master:Stockpile:Update";
        const enum Fields {
            VendorId = "VendorId",
            NameVendor = "NameVendor",
            LogoVendor = "LogoVendor"
        }
    }
}
declare namespace SShopManagementSystem.Master {
    namespace ProductVendorsService {
        const baseUrl = "Master/ProductVendors";
        function Create(request: Serenity.SaveRequest<ProductVendorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductVendorsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductVendorsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductVendorsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/ProductVendors/Create",
            Update = "Master/ProductVendors/Update",
            Delete = "Master/ProductVendors/Delete",
            Retrieve = "Master/ProductVendors/Retrieve",
            List = "Master/ProductVendors/List"
        }
    }
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
    interface ProductsForm {
        NameProduct: Serenity.StringEditor;
        TypeId: Serenity.LookupEditor;
        VendorId: Serenity.LookupEditor;
        WeightProduct: Serenity.DecimalEditor;
        SizeProduct: Serenity.StringEditor;
        StockQuantityProduct: Serenity.IntegerEditor;
        BuyPriceProduct: Serenity.DecimalEditor;
        SalePriceProduct: Serenity.DecimalEditor;
    }
    class ProductsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
    interface ProductsRow {
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
    namespace ProductsRow {
        const idProperty = "ProductId";
        const nameProperty = "NameProduct";
        const localTextPrefix = "Master.Products";
        const lookupKey = "Master.Products";
        function getLookup(): Q.Lookup<ProductsRow>;
        const deletePermission = "Master:Stockpile:Delete";
        const insertPermission = "Master:Stockpile:Insert";
        const readPermission = "Master:Stockpile:Read";
        const updatePermission = "Master:Stockpile:Update";
        const enum Fields {
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
declare namespace SShopManagementSystem.Master {
    namespace ProductsService {
        const baseUrl = "Master/Products";
        function Create(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Products/Create",
            Update = "Master/Products/Update",
            Delete = "Master/Products/Delete",
            Retrieve = "Master/Products/Retrieve",
            List = "Master/Products/List"
        }
    }
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
    interface StoresForm {
        NameStore: Serenity.StringEditor;
        AddressLineStore: Serenity.TextAreaEditor;
        SubDistrictStore: Serenity.StringEditor;
        DistrictStore: Serenity.StringEditor;
        ProvinceStore: Serenity.StringEditor;
        PostalCodeStore: Serenity.StringEditor;
        PhoneStore: Serenity.StringEditor;
    }
    class StoresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Master {
    interface StoresRow {
        StoreId?: number;
        NameStore?: string;
        AddressLineStore?: string;
        SubDistrictStore?: string;
        DistrictStore?: string;
        ProvinceStore?: string;
        PostalCodeStore?: string;
        PhoneStore?: string;
    }
    namespace StoresRow {
        const idProperty = "StoreId";
        const nameProperty = "NameStore";
        const localTextPrefix = "Master.Stores";
        const lookupKey = "Master.Stores";
        function getLookup(): Q.Lookup<StoresRow>;
        const deletePermission = "Master:Stores:Delete";
        const insertPermission = "Master:Stores:Insert";
        const readPermission = "Master:Stores:Read";
        const updatePermission = "Master:Stores:Update";
        const enum Fields {
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
declare namespace SShopManagementSystem.Master {
    namespace StoresService {
        const baseUrl = "Master/Stores";
        function Create(request: Serenity.SaveRequest<StoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Stores/Create",
            Update = "Master/Stores/Update",
            Delete = "Master/Stores/Delete",
            Retrieve = "Master/Stores/Retrieve",
            List = "Master/Stores/List"
        }
    }
}
declare namespace SShopManagementSystem.Master {
}
declare namespace SShopManagementSystem.Master {
    interface WorkersForm {
        FullnameWorker: Serenity.StringEditor;
        NicknameWorker: Serenity.StringEditor;
        GenderWorker: Serenity.EnumEditor;
        DegreeWorker: Serenity.StringEditor;
        PhoneWorker: Serenity.StringEditor;
        EmailWorker: Serenity.EmailAddressEditor;
        StoreWorker: Serenity.LookupEditor;
        JobTitleWorker: Serenity.StringEditor;
    }
    class WorkersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Master {
    interface WorkersRow {
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
    namespace WorkersRow {
        const idProperty = "WorkerId";
        const nameProperty = "FullnameWorker";
        const localTextPrefix = "Master.Workers";
        const lookupKey = "Master.Workers";
        function getLookup(): Q.Lookup<WorkersRow>;
        const deletePermission = "Master:Workers:Delete";
        const insertPermission = "Master:Workers:Insert";
        const readPermission = "Master:Workers:Read";
        const updatePermission = "Master:Workers:Update";
        const enum Fields {
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
declare namespace SShopManagementSystem.Master {
    namespace WorkersService {
        const baseUrl = "Master/Workers";
        function Create(request: Serenity.SaveRequest<WorkersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WorkersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WorkersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WorkersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Master/Workers/Create",
            Update = "Master/Workers/Update",
            Delete = "Master/Workers/Delete",
            Retrieve = "Master/Workers/Retrieve",
            List = "Master/Workers/List"
        }
    }
}
declare namespace SShopManagementSystem.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SShopManagementSystem.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SShopManagementSystem.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SShopManagementSystem.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SShopManagementSystem.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SShopManagementSystem.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SShopManagementSystem {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace SShopManagementSystem.Texts {
}
declare namespace SShopManagementSystem.Web {
    enum ManagersGender {
        Male = 1,
        Female = 2,
        ThirdGender = 3
    }
}
declare namespace SShopManagementSystem.Web {
    enum WorkersGender {
        Male = 1,
        Female = 2,
        ThirdGender = 3
    }
}
declare namespace SShopManagementSystem.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SShopManagementSystem.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SShopManagementSystem.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SShopManagementSystem.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SShopManagementSystem.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace SShopManagementSystem.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace SShopManagementSystem.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SShopManagementSystem.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SShopManagementSystem.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SShopManagementSystem.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SShopManagementSystem.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SShopManagementSystem.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SShopManagementSystem.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SShopManagementSystem.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SShopManagementSystem.LanguageList {
    function getValue(): string[][];
}
declare namespace SShopManagementSystem.ScriptInitialization {
}
declare namespace SShopManagementSystem {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace SShopManagementSystem.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace SShopManagementSystem.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace SShopManagementSystem.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace SShopManagementSystem.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace SShopManagementSystem.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SShopManagementSystem.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace SShopManagementSystem {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SShopManagementSystem.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SShopManagementSystem.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SShopManagementSystem.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace SShopManagementSystem.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace SShopManagementSystem.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace SShopManagementSystem.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace SShopManagementSystem.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SShopManagementSystem.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace SShopManagementSystem.Master {
    class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomersForm;
    }
}
declare namespace SShopManagementSystem.Master {
    class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SShopManagementSystem.Master {
    class ManagersDialog extends Serenity.EntityDialog<ManagersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ManagersForm;
    }
}
declare namespace SShopManagementSystem.Master {
    class ManagersGrid extends Serenity.EntityGrid<ManagersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ManagersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
    }
}
declare namespace SShopManagementSystem.Master {
    class OrderDetailsEditDialog extends Common.GridEditorDialog<OrderDetailsRow> {
        protected getFormKey(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailsForm;
        constructor();
    }
}
declare namespace SShopManagementSystem.Master {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailsRow> {
        protected getColumnsKey(): string;
        protected getLocalTextPrefix(): string;
        protected getDialogType(): typeof OrderDetailsEditDialog;
        constructor(container: JQuery);
        protected getAddButtonCaption(): string;
        protected validateEntity(row: OrderDetailsRow, id: number): boolean;
    }
}
declare namespace SShopManagementSystem.Master {
    class OrdersDialog extends Serenity.EntityDialog<OrdersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OrdersForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace SShopManagementSystem.Master {
    class OrdersGrid extends Serenity.EntityGrid<OrdersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrdersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SShopManagementSystem.Master {
    class ProductCategoriesDialog extends Serenity.EntityDialog<ProductCategoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductCategoriesForm;
    }
}
declare namespace SShopManagementSystem.Master {
    class ProductCategoriesGrid extends Serenity.EntityGrid<ProductCategoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductCategoriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
    }
}
declare namespace SShopManagementSystem.Master {
    class ProductVendorsDialog extends Serenity.EntityDialog<ProductVendorsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductVendorsForm;
    }
}
declare namespace SShopManagementSystem.Master {
    class ProductVendorsGrid extends Serenity.EntityGrid<ProductVendorsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductVendorsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SShopManagementSystem.Master {
    class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductsForm;
        private productsPurchasedInGrid;
        constructor();
        protected afterLoadEntity(): void;
    }
}
declare namespace SShopManagementSystem.Master {
    class ProductsGrid extends Serenity.EntityGrid<ProductsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getItemCssClass(item: Master.ProductsRow, index: number): string;
    }
}
declare namespace SShopManagementSystem.Master {
    class ProductsPurchasedInGrid extends Serenity.EntityGrid<OrderDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any;
        protected getInitialTitle(): any;
        protected usePager(): boolean;
        protected getGridCanLoad(): boolean;
        private _productID;
        get productID(): number;
        set productID(value: number);
    }
}
declare namespace SShopManagementSystem.Master {
    class StoresDialog extends Serenity.EntityDialog<StoresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StoresForm;
    }
}
declare namespace SShopManagementSystem.Master {
    class StoresGrid extends Serenity.EntityGrid<StoresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StoresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SShopManagementSystem.Master {
    class WorkersDialog extends Serenity.EntityDialog<WorkersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WorkersForm;
    }
}
declare namespace SShopManagementSystem.Master {
    class WorkersGrid extends Serenity.EntityGrid<WorkersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WorkersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickSearchFields(): Serenity.QuickSearchField[];
    }
}
declare namespace SShopManagementSystem.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace SShopManagementSystem.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SShopManagementSystem.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SShopManagementSystem.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SShopManagementSystem.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
