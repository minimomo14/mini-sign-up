// function matchPassword() {
//     if (password != confirm_password) {
//         alert("Passwords did not match!");
//     } else {
//         alert("Password created successfully")
//     }
// }

function validateForm() {
  const submitButton = document.getElementById("#button");
  const form = document.querySelector("form");
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirmPassword").value;
  const error = document.querySelector("#error").value;

  console.log("you see me here?");
  //first check empty first name
  if (firstName == "") {
    document.getElementById("blankMsg").innerHTML =
      "First name can not be empty.";

    return false;
  }
  console.log("first name");
  //character data validation
  if (!isNaN(firstName)) {
    document.getElementById("blankMsg").innerHTML =
      "Please enter your first name here!";
    return false;
  }
  

  if (lastName == "") {
    document.getElementById("charMsg").innerHTML =
      "Last name can not be empty.";
    return false;
  }

  if (!isNaN(lastName)) {
    document.getElementById("charMsg").innerHTML =
      "Please enter your last name here!";
    return false;
  }
  console.log("here is last name")

  //check empty password field
  if (password == "") {
    alert("Please enter your password")
    // document.getElementById("password").innerHTML = "Please enter the password";
    return false;
  }

  //then check the confirm password field
  if (confirm_password == "") {
    alert("Please confirm your password")
    return false;
  }

  //set minimum password length validation
  if (password.length < 8) {
    document.getElementById("#error").innerHTML =
      "Password must be at least 8 characters";
      return false;
  }

}

console.log("I was executed");