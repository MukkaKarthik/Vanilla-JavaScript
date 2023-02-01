var MyCompany = MyCompany || {};
MyCompany.team2 = MyCompany.team2 || {};



MyCompany.team2.customer  =  function(firstName,lastname ,Age)
{
    this.FirstName_Customer = firstName;
    this.LastName_Customer = lastname;
    this.Age_Customer = Age;

    this.getFullName = function ()
    {
        return  this.FirstName_Customer+ " " + this.LastName_Customer + " " + this.Age_Customer;
    }
}