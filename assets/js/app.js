document.addEventListener("DOMContentLoaded", function() {

    let submit_btn = document.querySelector("#submit-btn")
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    let error = document.querySelector("#error")

    if(password != confirmPassword) {
        alert("Password did not match!")
    }
    console.log("Hello, I'm the App!");

})