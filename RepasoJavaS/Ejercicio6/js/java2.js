const word=document.getElementById("letras");
word.addEventListener("keydown",(event)=>{
    if(!isNaN(event.key)){
        event.preventDefault();
    }
})