const multiplicar=()=>{
    
    total.value=parseInt(cont.value)*parseInt(numeros.value);
    
}

const total=document.getElementById("total");
const cont=document.getElementById("cantidad");
const numeros=document.getElementById("precio");
const boton=document.getElementById("enviar");

boton.addEventListener("click", multiplicar);

