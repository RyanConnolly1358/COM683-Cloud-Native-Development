const SIGNUP_BUTTON = document.getElementById("signUpBtn");
var USERNAME_TXT = document.getElementById("usernameTxt");
var PASSWORD_TXT = document.getElementById("passwordTxt");
var CONFIRM_PASSWORD_TXT = document.getElementById("confirmPasswordTxt");
var PASSWORD_LBL = document.getElementById("passwordLbl");

SIGNUP_BUTTON.onclick = function(){
    // SIGNUP_BUTTON.innerHTML = USERNAME_TXT.value + PASSWORD_TXT.value
    if(PASSWORD_TXT.value == CONFIRM_PASSWORD_TXT.value && PASSWORD_TXT.value != ""){
        //Update record in database
        SIGNUP_BUTTON.innerHTML = "true";
    }else{
        //Highlight issue.
        CONFIRM_PASSWORD_TXT.style.borderBlockColor = 'red'
        PASSWORD_LBL.hidden = false;
        PASSWORD_LBL.style.color = 'red';
        PASSWORD_LBL.style.textDecoration = none;
    }
}