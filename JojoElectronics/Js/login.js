// Show/hide password onClick of button using Javascript only

// https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);




// Get the login form and its components
const loginForm = document.querySelector('.overlay form');
const usernameInput = loginForm.querySelector('#txt-input');
const passwordInput = loginForm.querySelector('#pwd');
const loginButton = loginForm.querySelector('.log-in');
const signUpButton = loginForm.querySelector('.sign-up');
const forgotPasswordButton = loginForm.querySelector('.frgt-pass');

loginButton.addEventListener('click', function(event) {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check that username and password are not empty
  if (username.trim() === '' || password.trim() === '') {
    alert('Username and password cannot be empty');
    return;
  }

  // Check that username starts with an uppercase letter and accepts numbers up to 10 characters
 const usernameRegex = /^@[A-Z][A-Za-z0-9]{0,9}$/;
if (!usernameRegex.test(username)) {
  alert('Username must start with an "@" symbol, followed by an uppercase letter, and can only contain letters and numbers up to 10 characters');
  return;
}


  // Check that password contains both letters and numbers and is no longer than 8 characters
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,9}$/;
  if (!passwordRegex.test(password)) {
    alert('Password must contain at least one letter and one number, and be no longer than 8 characters');
    return;
  }

  // Here you can add code to validate the username and password and log the user in
  setTimeout(function(){
    // alert(`Logging in with username ${username} and password ${password}`);
    alert("Login Successful")
    window.location.href = "../Pages/loader.html";
  },50);
});


signUpButton.addEventListener('click', function(event) {
  event.preventDefault();
//   console.log('Navigating to sign-up page');
  alert("coming soon");
});

forgotPasswordButton.addEventListener('click', function(event) {
  event.preventDefault();
//   console.log('Navigating to forgot password page');
  alert("coming soon");
});


