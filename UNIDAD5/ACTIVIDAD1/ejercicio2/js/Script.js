
/**
 * nota, es la variable donde guaradremos la nota introducida por el usuario.
 * la variable nota le coloco el parseInt para pasar de String a numero.
 * 
 */

let nota=parseInt(prompt("Dime la nota"));

/**
 * compruebo si la nota es entre 0 y 3 , es muy deficiente , utilizando la condicion if
 */
if(nota>=0 && nota<3){
    alert("Muy deficiente")
}
/**
 * compruebo si la nota es entre 3 y 5 , es deficiente utilizando la condicion if
 */
if(nota>=3 && nota<5){
    alert("Deficiente")
}
/**
 * compruebo si la nota es 5 , es suficiente utilizando la condicion if
 */
if(nota==5){
    alert("Suficiente")
}
/**
 * compruebo si la nota es 6 , es bien utilizando la condicion if
 */
if(nota==6){
    alert("Bien")
}
/**
 * compruebo si la nota es entre 7 y 9 , es notable utilizando la condicion if
 */
if(nota>=7 && nota<9){
    alert("Notable")
}
/**
 * compruebo si la nota es 9 o 10 , es sobresaliente utilizando la condicion if
 */
if(nota>=9 ){
    alert("Sobresaliente")
}

/**
 * comrpuebo las notas utilizando Switch 
 */
switch(nota){
    case 0:
    case 1:
    case 2:
        alert("muy deficiente");
        break;
    case 3:
    case 4:
        alert("Insuficiente");
        break;
    case 5:
        alert("Suficiente");
        break;
    case 6:
        alert("Bien");
        break;
    case 7:
    case 8: 
    alert("Notable");
        break;
    case 9:
    case 10:     
    alert("Sobresaliente");
    break;  
}

