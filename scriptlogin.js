const form = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateEmail();
  validatePassword();
 ln();
 
});



function validateEmail() {
  var emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.textContent = "Please enter Valid email address";
    emailError.style.color = "red";

  } else {
    emailError.textContent = "";
  }
  
}




function validatePassword() {
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(password.value)) {
    passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    passwordError.style.color = "red";
    if (password.value.length < 4)
    {
      document.getElementById('passwordStren').textContent = "Password is poor";
      document.getElementById('passwordStren').style.color = "red";
   }
   else if(password.value.length < 8){
    document.getElementById('passwordStren').textContent = "Password is medium";
    document.getElementById('passwordStren').style.color = "orange";
   }
  } else {
    passwordError.textContent=""
    const passwordStrength = getPasswordStrength(password.value);
    if (passwordStrength === "strong") {
      document.getElementById('passwordStren').style.color = "green";
      document.getElementById('passwordStren').textContent = "Password is strong";
    } else if (passwordStrength === "medium") {
      document.getElementById('passwordStren').style.color = "orange";
      document.getElementById('passwordStren').textContent = "Password is medium";
    } else {
      document.getElementById('passwordStren').style.color = "red";
      document.getElementById('passwordStren').textContent = "Password is poor";
    }
  }
  
}

function getPasswordStrength(password) {
  if (password.length < 8)
   {
    return "poor";
  }
  if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) 
  {
    return "strong";
  }
  return "medium";
}


function ln(){
  if( validateEmail()&&  validatePassword()) {
    window.location.href="index.html";
	}
}























