/**TEXT AREA */
const areTextual=document.getElementById("somenthing");
var mostrado=true;

areTextual.addEventListener("input",()=>{

    if(areTextual.value=="primerodedam" && mostrado){
        alert("Has escrito primerodam!");
        mostrado=false;
    }
});

/*NO @*/
const validarCorreo=document.getElementById("correo");

validarCorreo.addEventListener("keydown",(event)=>{
    if(event.key=="@"){
        event.preventDefault();
    }
});

/*No numeros */

const validarNombre=document.getElementById("name");

validarNombre.addEventListener("keydown",(event)=>{
    if(!isNaN(event.key)){

        event.preventDefault();
    }

})

/*Enviar formulario */

const enviar=document.getElementById("boton");
enviar.addEventListener("click",()=>{

    alert("Formulario enviado")
});

/*MENU */

const styleMenu=document.querySelectorAll(".menu a");

styleMenu.forEach(x=>x.addEventListener("mouseenter",()=>{
    
    x.style.color="yellow";
}));
styleMenu.forEach(x=>x.addEventListener("mouseout",()=>{
    
    x.style.color="white";
}));

/*Tamaño imagen */

const maxImg=document.querySelectorAll(".divimg");

maxImg.forEach(x=>x.addEventListener("mouseenter",()=>{
    
    x.style.transform="scale(1.1)"
}));

maxImg.forEach(x=>x.addEventListener("mouseout",()=>{
    
    x.style.transform="scale(1)"
}));




