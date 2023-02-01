function validateTextBox()
{

    var UserName = document.getElementById("input_name_ID");

    var UserName1 = document.getElementById("input_address_ID");
    var UserName2 = document.getElementById("input_phone_ID");
    var UserName3 = document.getElementById("input_email_ID");



    if((UserName.value == "") || (UserName1.value == "") || (UserName2.value.length < 4) || (UserName3.value == ""))
    {
        alert("Field cannot be empty . Please input required information");
        UserName2.focus();
        UserName2.style.border = "solid 5px red";
    return false;

    }


}

