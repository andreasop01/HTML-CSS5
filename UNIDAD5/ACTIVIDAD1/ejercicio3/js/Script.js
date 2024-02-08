/**
 * cadena, cadena2 : valeriable donde almacenar lo que el usuario escriba
 */

let cadena=prompt("Dime una cadena");
let cadena2;

/**
 * bucle donde si cadena2 es null se suma
 */
do{
    cadena2=prompt("OTRA");
    if(cadena2!=null){
        cadena=cadena+"-"+cadena2;
    }
}while(cadena2!=null);

alert(cadena);