let body = document.getElementById('loopBody')
let VIDEO = document.getElementById('vid')
let USERNAME_LBL = document.getElementById('username')
let NEXT_BUTTON = document.getElementById('nextBtn')
let PREV_BUTTON = document.getElementById('prevBtn')

var index = 0;

body.onload = function(){


    const formData = new FormData();
    formData.append("userName", accountName);
      
             
        fetch("https://prod-168.westeurope.logic.azure.com:443/workflows/370dcfb0fd704c00b0d38a2f0e410bd1/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=nmfEE63xzaXTeHBmXcGymIJSn8iPQBfu7d-7kn33G-c", {
            method: "post",
            body: formData,
        }).then((response) => response.json())
        .then((data) => {
            videos = data;
            console.log(data.value[0].videoURL)
            VIDEO.src = data.value[0].videoURL;
            
            USERNAME_LBL.innerHTML = data.value[0].userName + ' Posted:';
            
        })
}

NEXT_BUTTON.onclick = function(){
   
    index = index+1;
    console.log(videos)
    VIDEO.src = videos.value[index].videoURL;
    USERNAME_LBL.innerHTML = videos.value[index].userName + ' Posted:';
    
    

}

PREV_BUTTON.onclick = function(){
    if(index >0){
        index = index-1;
        console.log(videos)
        VIDEO.src = videos.value[index].videoURL;
      
        USERNAME_LBL.innerHTML = videos.value[index].userName + ' Posted:';
    }
    

}

