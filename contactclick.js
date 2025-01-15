let contact = document.getElementById('mobcontact');
let about = document.getElementById('mobabout');

try{
    contact.addEventListener('click',contactClose);
    about.addEventListener('click',contactClose);

}
catch(e){
    
}
function contactClose(){
    nav.style.height="0px";
    menuicon.style.display="block";
    wrong.style.display="none";
}




