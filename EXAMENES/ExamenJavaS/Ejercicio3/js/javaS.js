/*menu */

const menu=document.querySelectorAll(".color");
menu.forEach(x=>x.addEventListener("mouseover",()=>{

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    x.style.color = "#" + randomColor;
}))

menu.forEach(x=>x.addEventListener("mouseleave",()=>{

    x.style.color = "black";
}))

/*precios */

const pri=document.querySelectorAll(".price");
pri.forEach(x=>x.addEventListener("mouseenter",()=>{

   x.style.transition = 'font-size 0.3s ease';
   x.style.fontSize = "7rem";
}))

pri.forEach(x=>x.addEventListener("mouseleave",()=>{

    x.style.transition = 'font-size 0.3s ease';
    x.style.fontSize = "5.5rem";
 }))
 
/*botones*/

const botones=document.querySelectorAll(".btn");
botones.forEach(boton=>boton.addEventListener("mouseenter",()=>{
    boton.style.background="red";
}));
botones.forEach(boton=>boton.addEventListener("mouseleave",()=>{
    boton.style.background="#f53b57";
}));

/*bordes */

const bordes=document.querySelectorAll(".contact-form .box");
bordes.forEach(borde=>borde.addEventListener("focusout",()=>{
    if(borde.value==""){
        borde.style.border="solid 2px red";
    }else{
        borde.style.border="solid 1px gray";
    }  
}));

bordes[3].addEventListener("input",()=>{
    if(bordes[3].value.includes("examendam")){
        bordes[3].style.border="2px solid green";

    }else{
        bordes[3].style.border="1px solid gray";
    }
})








