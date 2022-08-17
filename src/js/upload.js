let dropArea = document.getElementById('drop-area')
const SUBMIT_BUTTON = document.getElementById('submitBtn')
const inputFile = document.getElementById('fileElem')
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
            }).catch((error) => ("Something went wrong!", error));

    }else{
        SUBMIT_BUTTON.innerHTML = "Empty"
    }

}





  

