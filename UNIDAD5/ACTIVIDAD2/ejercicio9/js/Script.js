const Teclado = () => prompt("Introducir aqui");

/**

Función que verifica si el parámetro es un número.
@param {number} num - El número a verificar.
@returns {boolean} - Retorna true si el parámetro es un número y false si no lo es.
*/
const esNumero = num =>{
    return !isNaN(num);
};
/**

Función que verifica si el número es positivo.
@param {number} num - El número a verificar.
@returns {boolean} - Retorna true si el número es positivo y false si es negativo.
*/
const esPositivo = num =>{
    return num>=0;
}
/**

Función que calcula la potencia de un número.
@param {number} op - La base de la potencia.
@param {number} potencia - El exponente de la potencia.
@returns {number} - Retorna el resultado de la potencia.
*/
const p = (op, potencia)=>{
    let poten=op;
    for(let i=2; i<=potencia; i++){
        poten=num1;
    }
    return poten;
}
let num1;
let num2;

do{
    num1=prompt("dime un numero");
    if (!esNumero(num1)){
        alert("no es un numero");
    }else{
        if(!esPositivo(num1)){
            alert("no numero negativos");
        }
    }
}while(!esNumero(num1) || !esPositivo(num1));

do{
    num2=prompt("dime un numero");
    if (!esNumero(num2)){
        alert("no es un numero");
    }else{
        if(!esPositivo(num2)){
            lert("no numero negativos");
        }
    }   
}while(!esNumero(num2) || !esPositivo(num2));

num1=parseInt(num1);
num2=parseInt(num2);

alert(p(num1,num2));