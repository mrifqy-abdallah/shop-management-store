
namespace SShopManagementSystem.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow), CheckNames = true)]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("Insert your username here")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("Insert your password here"), Required(true)]
        public string Password { get; set; }
    }
}