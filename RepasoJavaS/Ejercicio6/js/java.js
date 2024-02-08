const manejador=(event)=>{
    if(!isNaN(event.key)){
        event.preventDefault();
    }
}

const letras=document.getElementById("letras");
letras.addEventListener("keydown",manejador)
