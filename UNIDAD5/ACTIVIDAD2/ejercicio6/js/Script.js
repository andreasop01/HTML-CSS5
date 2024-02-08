
/*
@param {number} i - Número a evaluar
@return {string} - Cadena de texto indicando si el número es múltiplo de 4 o 9
*/
const multiplos=(i)=>{
    if(i%4==0){
        return" (multiplo de 4) "
    }else{
        if(i%9==0){
        return" (multiplo de 9) "
       }
    }
    return "";
    }
    
    /*
    @param {number} i - Número a evaluar
    */
    const saltoLinea=(i)=>{
        if(i%5==0){
        document.write("---------------------"+"<br>")
        }
    }
    
    /* Recorre los números del 1 al 500, evalúa si son múltiplos de 4 o 9 y los imprime en pantalla junto con una línea separadora cada 5 números.
    */
    for(i=1; i<=500; i++){
        document.write(i+multiplos(i)+"<br>");
        saltoLinea(i);
    }