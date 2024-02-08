// border 

const colores=document.getElementById("colorB");
const borde=document.getElementById("borde");
const rangeB=document.getElementById("rangeB");

colores.addEventListener("input",() =>{
     
   borde.style.backgroundColor=colores.value;
})

rangeB.addEventListener("input",()=>{

    borde.style.padding=rangeB.value+"px";
})

//padding

const coloresP=document.getElementById("colorP");
const padding=document.getElementById("pading");
const rangeP=document.getElementById("rangeP");

coloresP.addEventListener("input",() =>{
     
   padding.style.backgroundColor=coloresP.value;
})

rangeP.addEventListener("input",()=>{

    padding.style.padding=rangeP.value+"px";
})

//contenido

const coloresC=document.getElementById("colorC");
const contenido=document.getElementById("contenido");
const rangeC=document.getElementById("rangeC");

coloresC.addEventListener("input",() =>{
     
   contenido.style.backgroundColor=coloresC.value;
})

rangeC.addEventListener("input",()=>{

    contenido.style.padding=rangeC.value+"px";
})

