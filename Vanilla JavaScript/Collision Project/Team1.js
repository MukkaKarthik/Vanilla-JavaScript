var MyCompany = MyCompany || {};
MyCompany.Team1 = MyCompany.Team1 || {};


MyCompany.Team1.customer = function (firstName,lastname)
{
    this.FirstName_Customer = firstName;
    this.LastName_Customer = lastname;

    this.getFullName = function ()
    {
        return  this.FirstName_Customer+ " " + this.LastName_Customer;
    }
}