
/**
 * hago un for
 * declaro la variable i
 * con longitud menor igual 500
 * que se repita 
 * 
 * dentro hago condiciones 
 * si el numero es multiplo de 4 que se impirma por pantalla
 * si no, que sea multiplo de 9
 * y una ultimo conficion cada 5 lineas que aparezca linea recta
 */
for(i=1;i<=500;i++){
    if(i%4==0){
        document.write(i+"(multiplo de 4)"+"<br>")
    }else{
        if(i%9==0){
            document.write(i+"(multiplo de 9)"+"<br>")
        }else{
            document.write(i+"<br>")
        }
    }
    if(i%5==0){
        document.write("----------------------------"+"<br>")
    }
}