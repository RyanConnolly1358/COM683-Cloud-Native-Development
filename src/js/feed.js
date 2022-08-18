let body = document.getElementById('mainBody')

let IMG_1 = document.getElementById('img1')
let IMG_2 = document.getElementById('img2')
let IMG_3 = document.getElementById('img3')
let IMG_4 = document.getElementById('img4')
let IMG_5 = document.getElementById('img5')

let DESC_1 = document.getElementById('description1')
let DESC_2 = document.getElementById('description2')
let DESC_3 = document.getElementById('description3')
let DESC_4 = document.getElementById('description4')
let DESC_5 = document.getElementById('description5')

let USER_LBL1 = document.getElementById('poster1')
let USER_LBL2 = document.getElementById('poster2')
let USER_LBL3 = document.getElementById('poster3')
let USER_LBL4 = document.getElementById('poster4')
let USER_LBL5 = document.getElementById('poster5')

body.onload = function(){

    const formData = new FormData();
    formData.append("userName", accountName);
      
             
        fetch("https://prod-147.westeurope.logic.azure.com:443/workflows/30c11ff5150849a2ae216464bf404392/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Db7ebB0DkAgKxylnOUftrGFkvw9n6jzFUV53VXtxCLA", {
            method: "post",
            body: formData,
        }).then((response) => response.json())
        .then((data) => {
            console.log(data.value[0])
            
            IMG_1.src = data.value[0].imageURL;
            IMG_2.src = data.value[1].imageURL;
            IMG_3.src = data.value[2].imageURL;
            IMG_4.src = data.value[3].imageURL;
            IMG_5.src = data.value[4].imageURL;


            DESC_1.innerHTML = data.value[0].description;
            DESC_2.innerHTML = data.value[1].description;
            DESC_3.innerHTML = data.value[2].description;
            DESC_4.innerHTML = data.value[3].description;
            DESC_5.innerHTML = data.value[4].description;
            
            USER_LBL1.innerHTML = data.value[0].userName + ' Posted:';
            USER_LBL2.innerHTML = data.value[1].userName + ' Posted:';
            USER_LBL3.innerHTML = data.value[2].userName + ' Posted:';
            USER_LBL4.innerHTML = data.value[3].userName + ' Posted:';
            USER_LBL5.innerHTML = data.value[4].userName + ' Posted:';



        })
}