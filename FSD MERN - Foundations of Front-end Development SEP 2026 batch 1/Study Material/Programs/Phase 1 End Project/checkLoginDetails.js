
function checkLoginDetails() {
    //alert("event is triggered");
    let emailId = document.getElementById("emailId").value;
    let password = document.getElementById("password").value;
    // if you want to do custom validation you can write the logic 
    // here also 
    // if we check multiple account from server side technology 
    if(emailId == "akash@gmail.com" && password == "12345") {
        alert("Login Successful");
        // sessionStorage is a 
        // pre defined object which help to share 
        // the data between different pages of same application
        sessionStorage.setItem("emailId", "akash@gmail.com")
        return true;
    }else {
        alert("Login Failed");
        return false;
    }
}