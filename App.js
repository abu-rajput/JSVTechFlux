const body = document.querySelector("#chatproces");
const sendbtn= document.querySelector('.sendbtn');



function start(){
    let  messa= document.createElement('div');   

    messa.setAttribute('class','mesLeft')
    let greatMes= 'Welcome to JSV TECH FLUX! I’m FluxBot, your digital assistant.';
    body.appendChild(messa);
    messa.innerHTML= greatMes;


}
sendbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    const text = document.querySelector('.text').value;

    if(text == undefined || text == ''){
        
    }else{
        let req = document.createElement('div');
        
        req.setAttribute('class','reqRight');
        req.innerHTML= text;
        
        body.appendChild(req);
        
        document.querySelector('.text').value='';
    }
 })
