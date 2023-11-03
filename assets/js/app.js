const submitButton = document.getElementById("#button");
const form = document.querySelector("form")
const password = document.getElementById("#password");
const confirm_password = document.getElementById("#confirmPassword");
const error = document.querySelector("#error")


password.addEventListener("input", (e) => {
    if (password != confirm_password) {
        error.textContent = "";
        error.className = "ERROR: Password did not match" // Password did not match!
    } else {
        showError();
    }
});

form.addEventListener("submit", (e) => {
    if(password.validity.valid) {
        showError();
        e.preventDefault();
    }
});

function showError() {
    if (password.validity.valueMissing) {
        //if it's empty, display "You need to enter password."
        error.textContent = "You need to enter password.";
    } else if (password.validity.typeMismatch){
        //check if password did not match, show error: "Password did not match"
        error.textContent = "Please enter matching password."
    }

    error.className = "error active";
}