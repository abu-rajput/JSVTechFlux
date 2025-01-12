let chat = document.getElementById("chat");
let chatbox = document.getElementById("chatbox");
let x = document.getElementsByClassName("bxs-message-alt-x")[0];
let messageX = document.getElementById('messageExit');
let mesage= document.getElementsByClassName('message')[0];

chatbox.style.display="none";
chat.addEventListener('click',process)
x.addEventListener('click',close)
messageX.addEventListener('click',poupClose)
function process(){
    if(chatbox.style.display=="none"){
        chatbox.style.display="block";
        x.style.width="45px"
        x.style.height="45px"
        x.style.color="white"
        x.style.height="45px"
        x.style.fontSize="40px"
        x.style.marginTop="10px"
        x.style.marginLeft="10px"
        x.style.borderRadius="50%";
        chat.style.display="none";
        mesage.style.display="none"

    }   else{
        chatbox.style.display=="block"
    }
}
function close(){
    if(chatbox.style.display=="block"){
        chatbox.style.display="none";
        chat.style.display="flex"
        mesage.style.display='flex'

    }
}
function poupClose(){
     mesage.style.display="none"

};


setTimeout(function (){
    mesage.classList.add('undermessage');
},
15000);