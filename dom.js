

document.getElementById('my-form').addEventListener('submit',function (event){
       event.preventDefault();

       const Name=document.getElementById('name').value;
       const Email=document.getElementById('email').value;

       var userInfo = {
              Name : Name,
              Email : Email
       }

       localStorage.setItem("userinfo", JSON.stringify(userInfo)); 
       nextli(userInfo);
       createButton();
    
});

function nextli(userInfo){

const parentElement = document.getElementById('users');
const childElement = document.createElement('li');

childElement.id="item";

childElement.textContent=childElement.textContent+userInfo.Name+'-'+userInfo.Email;
parentElement.appendChild(childElement);

}


function createButton(){
       const li=document.getElementById('item');
       const btn=document.createElement('button');
       btn.innerHTML='<button id="button/>';
       btn.innerText="delete";
       
       li.appendChild(btn);
       document.getElementById('button').onclick=function removelement(){
       var remove = document.getElementById('item');
       remove.removeAttribute();
       }    
}


