const efecto=()=>{
    cuadros.style.background="red";
}
const salida=()=>{
    cuadros.style.background="white";
}

const cuadros=document.getElementById("cuadro");
window.addEventListener("load",()=>{

    cuadros.addEventListener("mouseenter",efecto);
    cuadros.addEventListener("mouseleave",salida);
})
