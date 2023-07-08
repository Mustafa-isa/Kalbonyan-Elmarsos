let form = document.getElementById("form");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let btn = document.getElementById("btn");
//add event listner

function check(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() == "") {
      showError(input, `${upperCase(input.id)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
function upperCase(text) {
  const final = text.charAt(0).toUpperCase() + text.slice(1);
  return final;
}
//check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${upperCase(input.id)} must be at least ${min}`);
  } else if (input.value.length > max) {
    showError(input, `${upperCase(input.id)} must be less than ${max}`);
  } else {
    showSuccess(input);
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  check([userName, email, password, password2]);
  checkLength(userName, 3, 20);
  checkLength(password, 6, 30);
  checkEmail(email)
  checkMtch(password2 ,password)

});
//add functions
function showError(input, msg) {
  let parent = input.parentElement;
  parent.className = "form-item error";
  input.style.borderColor = " #a74c3c";
  let small = input.nextElementSibling;
  small.innerHTML = msg;
}

function showSuccess(input) {
  input.style.borderColor = " #2ecc71";
  let parent = input.parentElement;
  parent.classList.remove("error");
}
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())){
    showSuccess(input);
  }else{
 showError(input, 'email is not vaild')


  }
}
function checkMtch(input1 ,input0){


    if(input0.value !== input1.value){
        showError(input1, 'password not match')
    }
    
}
