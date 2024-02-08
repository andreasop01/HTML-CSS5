const usuario=document.getElementById("usuari");
const contraseña=document.getElementById("contrase");
const boton=document.getElementById("boto");

boton.addEventListener("click",()=>{

    if(usuario.value=="admin" && contraseña.value=="admin"){

        window.open("pages/principal.html","_self");

    }else{
        alert("Usuario o contraseña incorrectos");
    }

});


