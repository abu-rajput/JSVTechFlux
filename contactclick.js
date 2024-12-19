let contact = document.getElementById('mobcontact');
// let nav = document.getElementById('navbar');
contact.addEventListener('click',contactClose);


function contactClose(){
    nav.style.height="0px";
    menuicon.style.display="block";
    wrong.style.display="none";
}