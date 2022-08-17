const SIGNUP_BUTTON = document.getElementById("signUpBtn");
var USERNAME_TXT = document.getElementById("usernameTxt");
var PASSWORD_TXT = document.getElementById("passwordTxt");
var CONFIRM_PASSWORD_TXT = document.getElementById("confirmPasswordTxt");
var PASSWORD_LBL = document.getElementById("passwordLbl");

SIGNUP_BUTTON.onclick = function(){
    // SIGNUP_BUTTON.innerHTML = USERNAME_TXT.value + PASSWORD_TXT.value
    if(PASSWORD_TXT.value == CONFIRM_PASSWORD_TXT.value && PASSWORD_TXT.value != ""){
        //Update record in database
        //Create Object and convert to JSON
    var data = {
        userName: USERNAME_TXT.value,
        password: PASSWORD_TXT.value,
      };
    body = JSON.stringify(data);

    const request = new XMLHttpRequest();
    request.open("POST", "https://prod-154.westeurope.logic.azure.com:443/workflows/62b6919ee4c1412fb7368f549be3fd9b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bzuyWL66e2MHD7ahgjkPt3pNyY37W1fKjCE8qIHC79c");
    //request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    
    request.send(body);

    request.onreadystatechange = (e) => {
        if(request.responseText == "\"accountCreated\": true"){
            document.location='/src/html/loops.html';
        }else{
            USERNAME_TXT.style.borderBlockColor = 'red';
            PASSWORD_LBL.innerHTML = "Username already taken";
            PASSWORD_LBL.hidden = false;
            PASSWORD_LBL.style.color = 'red';

        }

   }


    }else{
        //Highlight issue.
        CONFIRM_PASSWORD_TXT.style.borderBlockColor = 'red'
        PASSWORD_LBL.hidden = false;
        PASSWORD_LBL.style.color = 'red';
        PASSWORD_LBL.style.textDecoration = none;
    }
}