let dropArea = document.getElementById('drop-area')

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
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('loadend', () =>{
        var img = document.createElement('img')
        img.src = reader.result;
        document.getElementById('preview').append(img)
    })
    
}


  

