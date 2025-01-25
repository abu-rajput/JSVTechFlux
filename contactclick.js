let career = document.getElementById('ship');
let about = document.getElementById('mobabout');

try{
    career.addEventListener('click',contactClose);
    about.addEventListener('click',contactClose);

}
catch(e){
    
}
function contactClose(){
    nav.style.height="0px";
    menuicon.style.display="block";
    wrong.style.display="none";
}




