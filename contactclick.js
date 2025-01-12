let contact = document.getElementById('mobcontact');
let about = document.getElementById('mobabout');

let substract = document.getElementById("minimaiz");
let faq= document.getElementById("faq");
let detail =document.getElementById("Detail");


contact.addEventListener('click',contactClose);
substract.addEventListener('click',minimaiz);

// about.addEventListener('click',contactClose);

faq.style.height="70px";

function contactClose(){
    nav.style.height="0px";
    menuicon.style.display="block";
    wrong.style.display="none";
}

function minimaiz(){
    if(faq.style.height=="70px"){
        faq.style.height="fit-content";
        substract.innerHTML="-";
        detail.style.display="block"

    }else{

        faq.style.height="70px"
        substract.innerHTML="+";
        detail.style.display="none";


    }
    
}


