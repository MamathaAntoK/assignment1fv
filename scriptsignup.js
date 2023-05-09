

const form = document.getElementById("myForm");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const phoneError1 = document.getElementById("phoneError1");
const phoneError2 = document.getElementById("phoneError1");
const phoneError3 = document.getElementById("phoneError3");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateEmail();
  validatePhone1();
  validatePhone2();
  validatePhone3();
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

function validatePhone1() {
  var phoneRegex1 =/^([0-9])+$/;
  if (!phoneRegex1.test(phone.value)) {
    phoneError1.textContent = "Please enter number only";
    phoneError1.style.color = "red";
  } else {
    phoneError1.textContent = "";
  }

}

function validatePhone2() {
  var phoneRegex2 =/^\d{10}$/;
  if (!phoneRegex2.test(phone.value)) {
    phoneError2.textContent = "Please enter Minimum 10 numbers";
    phoneError2.style.color = "red";
  } else {
    phoneError2.textContent = "";
  }

}

function validatePhone3() {
  var phoneRegex3 = /^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
  if (!phoneRegex3.test(phone.value)) {
    phoneError3.textContent = "Please enter phone number 3 formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
    phoneError3.style.color = "red";
  } else {
    phoneError3.textContent = "";
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
  if( validateEmail()&& validatePhone1() &&validatePhone2() &&validatePhone3() && validatePassword()) {
    window.location.href="login.html";
	}
}























