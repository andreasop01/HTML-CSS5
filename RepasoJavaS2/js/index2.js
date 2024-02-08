const incrementar=()=>{
    conta.innerHTML=parseInt(conta.innerHTML)+1;

    if(conta.innerHTML>0){

        conta.style.color="green";
    }
    if(conta.innerHTML==0){
        conta.style.color="black"
    }
}

const desc=()=>{
    conta.innerHTML=parseInt(conta.innerHTML)-1;

    if(conta.innerHTML<0){

        conta.style.color="red";
    }
    if(conta.innerHTML==0){
        conta.style.color="black"
    }

}

const reset=()=>{
    conta.innerHTML=0;

    if(conta.innerHTML==0){
        conta.style.color="black"
    }
}

const conta=document.querySelector(".value");

const subir=document.querySelector(".increase");
subir.addEventListener("click",incrementar);

const bajar=document.querySelector(".decrease");
bajar.addEventListener("click",desc);

const reseat=document.querySelector(".reset");
reseat.addEventListener("click",reset)



