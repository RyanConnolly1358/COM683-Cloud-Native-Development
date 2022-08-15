const LOGIN_BUTTON = document.getElementById("loginButton");
var USERNAME_TXT = document.getElementById("usernameTxt");
var PASSWORD_TXT = document.getElementById("passwordTxt");


LOGIN_BUTTON.onclick = function checkCredentials() {
    //LOGIN_BUTTON.style.backgroundColor = 'yellow';
    //LOGIN_BUTTON.style.color = 'blue';

     let username = USERNAME_TXT.value;
     let password = PASSWORD_TXT.value;

    const formData = new FormData();

    formData.append("userName", username);
    formData.append("password", password);

    

    //  const request = new 
    //  XMLHttpRequest();
    //  request.open("POST", "www.logicAppURL.com");
    //  request.send(formData);
}

