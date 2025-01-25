const body = document.querySelector("#chatproces");
const sendbtn= document.querySelector('.sendbtn');




function start(){
    let  messa= document.createElement('div');    

    messa.setAttribute('class','mesLeft')
    let greatMes= 'Welcome to JSV TECH FLUX! I’m FluxBot, your digital assistant.';
    body.appendChild(messa);
    messa.innerHTML= greatMes;


}
sendbtn.addEventListener('click', async (e)=>{
    e.preventDefault();    
    
    const text = document.querySelector('.text').value;

    if(!text){
        alert('Please Enter a message');
        return;
    }else{
    try{
        let req = document.createElement('div');
        req.setAttribute('class','reqRight');
        req.innerHTML= text;
        
        body.appendChild(req);
        
        let url = "http://127.0.0.1:8000/chat"
        const response = await fetch(url,{
            method: 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(  {message : text}  )
        })

        let getdata= await response.json();
        console.log(response);
        
        if(response.ok){
            let res = document.createElement('div');
            res.setAttribute('class','mesLeft')
            res.innerHTML= getdata.response;
            body.appendChild(res);
        }else{
            alert(getdata.response);
        }
        document.querySelector('.text').value='';
    }
    catch(error){
        document.querySelector('.text').value='';

        console.log('Error :',error);
        alert('something went wrong')
        
    }
    }

    function scroll(){
        body.scrollTop = body.scrollHeight;
    }

    scroll();
 })
