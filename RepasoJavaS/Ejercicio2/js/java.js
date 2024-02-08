const mensaje=()=>{
    alert("Pulsaste sobre el boton");
}

const pulsar=document.getElementById("boton");
pulsar.addEventListener("click",mensaje);

pulsar.style.border="solid black 1px"