const LOGIN_BUTTON = document.getElementById("loginButton");
var USERNAME_TXT = document.getElementById("usernameTxt");
var PASSWORD_TXT = document.getElementById("passwordTxt");

LOGIN_BUTTON.onclick = function checkCredentials() {

    var username = USERNAME_TXT.value;
    var password = PASSWORD_TXT.value;

    //Create Object and convert to JSON
    var data = {
        userName: username,
        password: password,
      };
    body = JSON.stringify(data);


    //Open request and send JSON Body
    const request = new XMLHttpRequest();
    request.open("POST", "https://prod-253.westeurope.logic.azure.com:443/workflows/1aa36e7d5f2c4effb59df6ebdf0d4cda/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FN0tr_TEahENkKe4fQSxoaMPkmaXVweqkn63sXrTdMU");
    //request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");

    request.send(body);

    request.onreadystatechange = (e) => {
        if(request.responseText == "\"matchDetermined\":true"){
            document.location='/src/html/loops.html';
        }else{
            USERNAME_TXT.style.borderBlockColor = 'red';
            PASSWORD_TXT.style.borderBlockColor = 'red';

        }

   }

}

