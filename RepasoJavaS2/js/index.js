const bajar=()=>{
   contador.innerHTML=parseInt(contador.innerHTML)-1;

   if(contador.innerHTML<0){
    contador.style.color="red";
   }
   if(contador.innerHTML==0){
    contador.style.color="black";
   }
 
}
const subir=()=>{
    contador.innerHTML=parseInt(contador.innerHTML)+1;

    if(contador.innerHTML>0){
        contador.style.color="green";
    }
    if(contador.innerHTML==0){
        contador.style.color="black";
    }
    
}

const resetear=()=>{
    contador.innerHTML=0;
    contador.style.color="black";
}


const contador=document.querySelector(".value");

const botones=document.querySelector(".decrease");
botones.addEventListener("click",bajar);

const botones1=document.querySelector(".increase");
botones1.addEventListener("click",subir);


const botones2=document.querySelector(".reset");
botones2.addEventListener("click",resetear);



