/**
 * variable donde se almacena numero y sumas que el usuario ponga
 */
let numeros=0;
let suma=0;

/**
 * bucle donde le pide al usuario un numero
 * si el numero no es null entra en el bucle y comprueba si es un numero o no 
 * si si es un numero se van a sumar
 */
do{
    numeros=prompt("dame un numero");
    if(numeros!=null){
        if(isNaN(numeros)){
            alert("no es un numero")
        }else{
            suma+=parseInt(numeros);  
        }
    }
}while(numeros!=null)

alert(suma);