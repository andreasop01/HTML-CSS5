//ampliacion de imagen index

const asignatura=document.querySelectorAll(".container2 div");

asignatura.forEach(x=>x.addEventListener("mouseenter",()=>{

    x.style.transform="scale(1.1)"
}));

asignatura.forEach(x=>x.addEventListener("mouseout",()=>{

    x.style.transform="scale(1)"
}));

//no numeros

const validarNombre=document.getElementById("name");

validarNombre.addEventListener("keydown",(event)=>{
    if(!isNaN(event.key)){

        event.preventDefault();
    }

});

/*Enviar formulario */

const enviar=document.getElementById("boton");
enviar.addEventListener("dblclick",()=>{

    alert("Formulario enviado")
});
