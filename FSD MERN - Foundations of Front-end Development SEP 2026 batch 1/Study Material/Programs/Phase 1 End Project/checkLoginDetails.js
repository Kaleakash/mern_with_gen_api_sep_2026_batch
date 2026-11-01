
function checkLoginDetails() {
    //alert("event is triggered");
    let emailId = document.getElementById("emailId").value;
    let password = document.getElementById("password").value;
    // if you want to do custom validation you can write the logic 
    // here also 
    if(emailId == "akash@gmail.com" && password == "12345") {
        alert("Login Successful");
        return true;
    }else {
        alert("Login Failed");
        return false;
    }
}