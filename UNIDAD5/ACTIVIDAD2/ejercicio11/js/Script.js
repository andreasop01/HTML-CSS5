
/**
 * Función para obtener el número del DNI.
 * @param {string} dni - El número completo del DNI.
 * @return {number} - El número del DNI sin la letra.
 */
const numeroDNI = dni =>{
    return parseInt(dni.substring(0, dni.length-1))
};

/**
 * Función para obtener la letra del DNI.
 * @param {string} dni - El número completo del DNI.
 * @return {string} - La letra del DNI.
 */
const letraDNI = dni =>{
    return dni.charAt(dni.length-1);
};

/**
 * Función para comprobar si el número del DNI es válido.
 * @param {number} num - El número del DNI.
 * @return {boolean} - Verdadero si el número del DNI es válido, falso si no lo es.
 */
const numNoValido = num =>{
    return num<0 || num>99999999;
};

/**
 * Función para comprobar si la letra del DNI es válida.
 * @param {string} cad - La letra del DNI que se quiere comprobar.
 * @param {number} num - El número del DNI.
 * @return {boolean} - Verdadero si la letra es válida, falso si no lo es.
 */
const letraValida = (cad, num) =>{
    return cad == letras[num%23]
}

// Array con las letras para comprobar la validez del DNI.
var letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T');

// Se solicita al usuario que introduzca su DNI.
let dni=prompt("Dime tu DNI");

// Se obtiene el número y la letra del DNI.
let n=numeroDNI(dni); 
let letra=letraDNI(dni);

// Se comprueba si el DNI es válido y se muestra el resultado en un mensaje de alerta.
if(numNoValido(n)){
    alert("Dni no valido");
} else {
    if (letraValida(letra, n)){
        alert("Dni correcto");
    } else {
        alert("Letra del dni incorrecta");
    }
}

// Se comprueba si el DNI es válido y se muestra el resultado en la consola.
if(numNoValido(n)){
    console.log("Dni no valido");
} else {
    if (letraValida(letra, n)){
        console.log("Dni correcto");
    } else {
        console.log("Letra del dni incorrecta");
    }
}

// Se comprueba si el DNI es válido y se muestra el resultado en el documento HTML.
if(numNoValido(n)){
    document.write("<p>Dni no valido</p>");
} else {
    if (letraValida(letra, n)){
        document.write("<p>Dni correcto</p>");
    } else {
        document.write("<p>Letra del dni incorrecta</p>");
    }
}
