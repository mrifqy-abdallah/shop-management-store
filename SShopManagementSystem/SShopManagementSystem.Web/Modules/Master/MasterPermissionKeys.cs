
using Serenity.Extensibility;
using System.ComponentModel;

namespace SShopManagementSystem.Master
{
    [NestedPermissionKeys]
    [DisplayName("Master")]
    public class PermissionKeys
    {
        [Description(".General (Read only)")]
        [ImplicitPermission(Customers.Read), ImplicitPermission(Managers.Read), ImplicitPermission(Stores.Read), ImplicitPermission(Workers.Read), ImplicitPermission(Stockpile.Read), ImplicitPermission(Purchasement.Read)]
        public const string General = "Master:General";

        [Description(".Manager (Central)")]
        [ImplicitPermission(Managers.Read), ImplicitPermission(Managers.Insert), ImplicitPermission(Managers.Update), ImplicitPermission(Managers.Delete)]
        [ImplicitPermission(Stores.Read), ImplicitPermission(Stores.Insert), ImplicitPermission(Stores.Update), ImplicitPermission(Stores.Delete)]
        [ImplicitPermission(Customers.Read), ImplicitPermission(Workers.Read), ImplicitPermission(Stockpile.Read), ImplicitPermission(Purchasement.Read)]
        public const string SuperManager = "Master:SuperManager";

        [Description(".Manager (Branch)")]
        [ImplicitPermission(Workers.Read), ImplicitPermission(Workers.Insert), ImplicitPermission(Workers.Update), ImplicitPermission(Workers.Delete)]
        [ImplicitPermission(Customers.Read), ImplicitPermission(Managers.Read), ImplicitPermission(Stockpile.Read), ImplicitPermission(Purchasement.Read)]
        public const string BranchManager = "Master:BranchManager";

        [Description(".Worker")]
        [ImplicitPermission(Purchasement.Read), ImplicitPermission(Purchasement.Insert), ImplicitPermission(Purchasement.Update), ImplicitPermission(Purchasement.Delete)]
        [ImplicitPermission(Stockpile.Read), ImplicitPermission(Stockpile.Insert), ImplicitPermission(Stockpile.Update), ImplicitPermission(Stockpile.Delete)]
        [ImplicitPermission(Customers.Read), ImplicitPermission(Customers.Insert), ImplicitPermission(Customers.Update), ImplicitPermission(Customers.Delete)]
        [ImplicitPermission(Stores.Read), ImplicitPermission(Workers.Read)]
        public const string Worker = "Master:Worker";

        [Description("Customers")]
        public class Customers
        {
            public const string Read = "Master:Customers:Read";
            [ImplicitPermission(Read)]
            public const string Insert = "Master:Customers:Insert";
            [ImplicitPermission(Read)]
            public const string Update = "Master:Customers:Update";
            [ImplicitPermission(Read)]
            public const string Delete = "Master:Customers:Delete";
        }

        [Description("Managers")]
        public class Managers
        {
            [ImplicitPermission(Stores.Read)]
            public const string Read = "Master:Managers:Read";
            [ImplicitPermission(Read)]
            public const string Insert = "Master:Managers:Insert";
            [ImplicitPermission(Read)]
            public const string Update = "Master:Managers:Update";
            [ImplicitPermission(Read)]
            public const string Delete = "Master:Managers:Delete";
        }

        [Description("Stores")]
        public class Stores
        {
            public const string Read = "Master:Stores:Read";
            [ImplicitPermission(Read)]
            public const string Insert = "Master:Stores:Insert";
            [ImplicitPermission(Read)]
            public const string Update = "Master:Stores:Update";
            [ImplicitPermission(Read)]
            public const string Delete = "Master:Stores:Delete";
        }

        [Description("Workers")]
        public class Workers
        {
            [ImplicitPermission(Stores.Read)]
            public const string Read = "Master:Workers:Read";
            [ImplicitPermission(Read)]
            public const string Insert = "Master:Workers:Insert";
            [ImplicitPermission(Read)]
            public const string Update = "Master:Workers:Update";
            [ImplicitPermission(Read)]
            public const string Delete = "Master:Workers:Delete";
        }

        [Description("Stockpile")]
        public class Stockpile
        {
            [ImplicitPermission(Purchasement.Read)]
            public const string Read = "Master:Stockpile:Read";
            [ImplicitPermission(Read)]
            public const string Insert = "Master:Stockpile:Insert";
            [ImplicitPermission(Read)]
            public const string Update = "Master:Stockpile:Update";
            [ImplicitPermission(Read)]
            public const string Delete = "Master:Stockpile:Delete";
        }

        [Description("Purchasement")]
        public class Purchasement
        {
            [ImplicitPermission(Workers.Read), ImplicitPermission(Customers.Insert)]
            public const string Read = "Master:Purchasement:Read";
            [ImplicitPermission(Read)]
            public const string Insert = "Master:Purchasement:Insert";
            [ImplicitPermission(Read)]
            public const string Update = "Master:Purchasement:Update";
            [ImplicitPermission(Read)]
            public const string Delete = "Master:Purchasement:Delete";
        }
    }
}
