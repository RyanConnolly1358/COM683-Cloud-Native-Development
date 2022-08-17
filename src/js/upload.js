let dropArea = document.getElementById('drop-area')
const SUBMIT_BUTTON = document.getElementById('submitBtn')
let inputFile = document.getElementById('fileElem')
let DESCRIPTION_TXT = document.getElementById('descriptiontxt')
let COMPLETE_PIC_LBL = document.getElementById('completePicLBL')

var img = document.createElement('img')



;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  })
  
  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }

dropArea.addEventListener('dragenter', highlight)
dropArea.addEventListener('dragleave', unhighlight)
dropArea.addEventListener('dragover', highlight)
dropArea.addEventListener('drop', unhighlight)
dropArea.addEventListener('drop', fileDropped)


function highlight(e) {
    dropArea.classList.add('highlight')
}
  
function unhighlight(e) {
    
    dropArea.classList.remove('highlight')
}

function fileDropped(e) {

    const file = e.dataTransfer.files[0];
    inputFile.files = e.dataTransfer.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('loadend', () =>{
        img.src = reader.result;
        document.getElementById('preview').append(img);
    })
    
}

SUBMIT_BUTTON.onclick = function(){
    event.preventDefault();

    if(img.src != ""){

        const formData = new FormData();
        
        for (const file of inputFile.files) {
            formData.append("files", file);
        }
             
            fetch("https://createimageblob.azurewebsites.net/api/uploadImage?", {
                method: "post",
                body: formData,
            }).then((resp) => {
                
              });
        
              var data = {
                username: accountName,
                description: DESCRIPTION_TXT.value,
                blobName: inputFile.files[0].name
                };
        
        
                body = JSON.stringify(data);

                //Open request and send JSON Body
                const request = new XMLHttpRequest();
                request.open("POST", "https://prod-54.westeurope.logic.azure.com:443/workflows/4af7d67c3cd243dda4c21a58c9e092da/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=884bUvOBvNP_N8KfwLknwkZfpAMqPwmRk4C2PfgSrus");
                //request.setRequestHeader("Accept", "application/json");
                request.setRequestHeader("Content-Type", "application/json");

                request.send(body);

                request.onreadystatechange = (e) => {
                    COMPLETE_PIC_LBL.hidden = false;
                    DESCRIPTION_TXT.value = "";
                    document.getElementById('preview').removeChild(img);
                    
                }

               
    }
}







  

