/* Función que realiza una operación de multiplicación entre dos valores

@param {number} op - El primer valor de la multiplicación
@param {number} op2 - El segundo valor de la multiplicación
@return {number} - El resultado de la multiplicación entre op y op2
*/
const operacion = (op,op2)=>{
    return opop2;
}
/* Función que calcula el factorial de un número dado

@param {number} valor - El número para el cual se desea calcular el factorial

@return {number} - El factorial de valor
*/
const factor = valor =>{
    let val=valor;
    
    // Ciclo que realiza la multiplicación sucesiva de val por todos los valores enteros positivos menores que valor
    for(let i=valor-1; i>0; i--){
        val=operacion(val,i);
    }
    return val;
    }
    
    // Se solicita un número al usuario y se muestra su factorial
    let numero=parseInt(prompt("dame un numero"));
    alert(factor (numero));