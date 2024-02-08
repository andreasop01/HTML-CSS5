// Función que imprime el número i tantas veces como el valor de i
// @param {number} i - El número que se va a imprimir
const cadenaNumeros = i => {
    for (let b = 1; b <= i; b++) {
        imprimirNumeros(i);
    }
}

// Función que imprime el número en el documento
// @param {number} i - El número que se va a imprimir
const imprimirNumeros = i => document.write(i);

// Bucle que recorre los números del 1 al 30 y llama a la función cadenaNumeros
for (let i = 1; i <= 30; i++) {
    cadenaNumeros(i);
    document.write("<br>"); // Imprime un salto de línea después de cada llamada a cadenaNumeros
}