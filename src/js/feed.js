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

let COMMENT_BUTTON1 = document.getElementById('commentBtn1')
let COMMENT_BUTTON2 = document.getElementById('commentBtn2')
let COMMENT_BUTTON3 = document.getElementById('commentBtn3')
let COMMENT_BUTTON4 = document.getElementById('commentBtn4')
let COMMENT_BUTTON5 = document.getElementById('commentBtn5')

let COMMENTS_POST1 = document.getElementById('commentSection1')
let COMMENTS_POST2 = document.getElementById('commentSection2')
let COMMENTS_POST3 = document.getElementById('commentSection3')
let COMMENTS_POST4 = document.getElementById('commentSection4')
let COMMENTS_POST5 = document.getElementById('commentSection5')

let COMMENT1 = document.getElementById('comment1')
let COMMENT2 = document.getElementById('comment2')
let COMMENT3 = document.getElementById('comment3')
let COMMENT4 = document.getElementById('comment4')
let COMMENT5 = document.getElementById('comment5')



COMMENT_BUTTON1.addEventListener('click', commentSubmit)
COMMENT_BUTTON2.addEventListener('click', commentSubmit)
COMMENT_BUTTON3.addEventListener('click', commentSubmit)
COMMENT_BUTTON4.addEventListener('click', commentSubmit)
COMMENT_BUTTON5.addEventListener('click', commentSubmit)

var postResp;

body.onload = async function(){

    const formData = new FormData();
    formData.append("userName", accountName);
      
             
        fetch("https://prod-147.westeurope.logic.azure.com:443/workflows/30c11ff5150849a2ae216464bf404392/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Db7ebB0DkAgKxylnOUftrGFkvw9n6jzFUV53VXtxCLA", {
            method: "post",
            body: formData,
        }).then((response) => response.json())
          .then(async (data) => {
            
            postResp = data;

            for ( const file of data.value) {
              
                var commentsOnPost = await getComments(file.id);
               

                commentsOnPost.forEach(comment => {
                var username = document.createElement('span')
                username.innerHTML = comment.commenter
                username.style.fontWeight = "bold";
                
                var tempComment = document.createElement('p');
                var img = document.createElement('IMG');
                img.src = "../../assets/test/abstract-user-flat-4.svg";
                img.style.width = "40px"
                img.style.height = "40px"
                img.style.marginRight = "5px"
                tempComment.appendChild(img)
                    
                tempComment.appendChild(username);

                
                tempComment.innerHTML = tempComment.innerHTML + " Commented: " + comment.comment;

                switch(file.id) {
                    case data.value[0].id:
                      COMMENTS_POST1.appendChild(tempComment)
                      break;
                    case data.value[1].id:
                        COMMENTS_POST2.appendChild(tempComment)
                      break;
                    case data.value[2].id:
                        COMMENTS_POST3.appendChild(tempComment)
                      break;
                    case data.value[3].id:
                        COMMENTS_POST4.appendChild(tempComment)
                        break;
                    case data.value[4].id:
                        COMMENTS_POST5.appendChild(tempComment)
                        break;

                  }

               
                })

            }

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


var serverResp = "none";

async function getComments (postid){

    // var data = {
    //     imageURL: url,
    //   };
    // body = JSON.stringify(data);

    // //Open request and send JSON Body
    // const request = new XMLHttpRequest();
    // request.open("POST", "https://prod-111.westeurope.logic.azure.com:443/workflows/470f5c5566a8416dbc340e332bfc2323/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=zyusfvmVw1ysdPj0thnuNrZuCFJtsVM6xV_NLqosGKM");
    // //request.setRequestHeader("Accept", "application/json");
    // request.setRequestHeader("Content-Type", "application/json");
    // request.send(body);
    // request.onreadystatechange = function() {
    //     if (request.readyState == 4)  {  
    //         const serverResponse = JSON.parse(request.responseText);
    //         serverResp = serverResponse;
    //         console.log(window.serverResp);
            
    //         }
            
    //     }
    
    // fetch("https://prod-13.westeurope.logic.azure.com/workflows/e1ebbaa7f00c4bf794ea3de52792524d/triggers/manual/paths/invoke/comments/"+postid+"?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=M98YyPt2OTk-qdrhaBisin_-dBO-eHfHQk7962gPyW4", {
    //     method: "get",
    // }).then((response) => response.json())
    // .then((data) => {
    //     console.log(data.value);
    //     return data.value;
    // })
   
    var commentResponse = await fetch("https://prod-13.westeurope.logic.azure.com/workflows/e1ebbaa7f00c4bf794ea3de52792524d/triggers/manual/paths/invoke/comments/"+postid+"?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=M98YyPt2OTk-qdrhaBisin_-dBO-eHfHQk7962gPyW4", {
        method: "get",
    })

    var listOfComments = await commentResponse.json()

    console.log(listOfComments)

    return listOfComments;
    // listOfComments.then(data => {
    //     console.log(data);
    //     serverResp = data;
    // }) 


}

function commentSubmit(e) {


    

    

    switch(e.srcElement.id) {
        case "commentBtn1":
            var data = {commenter: accountName, comment: COMMENT1.value, picID : postResp.value[0].id };
          break;
        case "commentBtn2":
            var data = {commenter: accountName, comment: COMMENT2.value, picID : postResp.value[1].id };
          break;
        case "commentBtn3":
            var data = {commenter: accountName, comment: COMMENT3.value, picID : postResp.value[2].id };
          break;
        case "commentBtn4":
            var data = {commenter: accountName, comment: COMMENT4.value, picID : postResp.value[3].id };
            break;
        case "commentBtn5":
            var data = {commenter: accountName, comment: COMMENT5.value, picID : postResp.value[4].id };
            break;

      }
    body = JSON.stringify(data);

      //Open request and send JSON Body
    const request = new XMLHttpRequest();
    request.open("POST", "https://prod-115.westeurope.logic.azure.com:443/workflows/a45bd6bd892e44ee8200c58e51f5df0a/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ebvfurJR4gqlf0kR1liSjZyp7QKKCOIXH-4C5tTHU_U");
    
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(body);

    request.onreadystatechange = function() {
            if (request.readyState == 4)  {  
            document.location='/src/html/feed.html';
                
            }
                
    }

}
