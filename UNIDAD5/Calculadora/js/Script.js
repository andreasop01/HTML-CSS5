//Obtenemos la pantalla y los botones de números y operadores del DOM
const pantalla=document.getElementById("screen");
const botones=document.querySelectorAll(".botones");
const operador=document.querySelectorAll(".operador");

//Agregamos un event listener a cada botón numérico para que al hacer clic se añada su valor a la pantalla
botones[0].addEventListener("click",()=>{
    pantalla.value += 0;
});
botones[1].addEventListener("click",()=>{
    pantalla.value += 1;
});
botones[2].addEventListener("click",()=>{
    pantalla.value += 2;
});
botones[3].addEventListener("click",()=>{
    pantalla.value += 3;
});
botones[4].addEventListener("click",()=>{
    pantalla.value += 4;
});
botones[5].addEventListener("click",()=>{
    pantalla.value += 5;
});
botones[6].addEventListener("click",()=>{
    pantalla.value += 6;
});
botones[7].addEventListener("click",()=>{
    pantalla.value += 7;
});
botones[8].addEventListener("click",()=>{
    pantalla.value += 8;
});
botones[9].addEventListener("click",()=>{
    pantalla.value += 9;
});
botones[10].addEventListener("click",()=>{
    pantalla.value = "";
});
botones[11].addEventListener("click",()=>{
    pantalla.value += ".";
});

//Agregamos un event listener a cada botón de operación para que al hacer clic se añada su valor a la pantalla
operador[0].addEventListener("click",()=>{
    pantalla.value += "/";
});
operador[1].addEventListener("click",()=>{
    pantalla.value += "*";
});

operador[2].addEventListener("click",()=>{
    pantalla.value += "-";
});
operador[3].addEventListener("click",()=>{
    pantalla.value += "+";
});

operador[4].addEventListener("click",()=>{
    //Obtenemos los operandos y la operación
    let pant=pantalla.value;
    let a="";
    let b="";
    let op="";


    for(let caracter=0; caracter<pantalla.value.length ; caracter++){
        //Si el caracter actual es un número o un punto, lo añadimos al primer operando
        if(!isNaN(pant.charAt(caracter)) || pant.charAt(caracter)=="."){
            a+=pant.charAt(caracter)

        }else{
            //Si es un operador, lo guardamos y pasamos al siguiente operando
            op=pant.charAt(caracter);
            b=a;
            a="";
        }

    }
    a=parseFloat(a);
    b=parseFloat(b);
    
    //Dependiendo de la operación, llamamos a la función correspondiente para calcular el resultado y lo mostramos en pantalla
    if(op=="+"){
        pantalla.value=sumar(b,a);
    }
    
    if(op=="-"){
        pantalla.value=restar(b,a);
    }
    
    if(op=="/"){
        pantalla.value=dividir(b,a);
    }
    if(op=="*"){
        pantalla.value=multiplicar(b,a);
    }
    
});

//Funciones para realizar las operaciones
const sumar=(operador1,operador2)=>{
    return operador1+operador2;
}

const restar=(operador1,operador2)=>{
    return operador1-operador2;
}

const dividir=(operador1,operador2)=>{
    return operador1/operador2;
}
const multiplicar=(operador1,operador2)=>{
    return operador1*operador2;
}












