let menu = document.getElementById('menu');
let nav = document.getElementById('navbar');
let wrong = document.getElementById('cros');
let menuicon = document.getElementsByClassName('bx-menu')[0];
let service = document.getElementById('service');




nav.style.height="0px";

menu.addEventListener('click',show);


function show(){
    if(nav.style.height=="0px"){
        nav.style.height="100vh";
        nav.style.overflow="scroll"
        wrong.style.display="block"; 
        menuicon.style.display="none";
       
}
else{
    nav.style.height="0px";
    menuicon.style.display="block";
    wrong.style.display="none";
}
    
}

function NotShow(){
    nav.style.height="0px";
    menuicon.style.display="block";
    wrong.style.display="none";
}