/**

@param {string} cadena - una cadena de texto
@return {number} - la longitud de la cadena de texto
*/
    const tamaño = cadena =>{
        return cadena.length;
    };
    /**
    
    @param {any} cadena - cualquier valor
    @return {boolean} - true si el valor es una cadena de texto, false si no lo es
    */
    const texto = cadena =>{
        return typeof cadena == "string";
    };
    let mayor;
    let m=0;
    
    for(c of valores){
        if(texto(c)){
            if(tamaño(c)>m){
                m=tamaño(c);
                mayor=c;
            }
        }
    }
    alert(mayor);
    
    //2
    /**
    
    @param {boolean} bolean - un valor booleano
    @return {string} - "es correcto" si el valor es verdadero, "es falso" si el valor es falso
    */
    const Booleano = bolean =>{
        return typeof bolean == "boolean"
    };
    for(bule of valores){
        if(Booleano(bule)){
            if(bule){
                alert("es correcto");
            } else{
                alert("es falso");
            }
        }
    }
    
    //3
    /**
    
    @param {number} num - un número
    @return {boolean} - true si el valor es un número, false si no lo es
    */
    const numero = num =>{
        return typeof num == "number"
    };
    let op=0;
    let op2=0;
    
    for(n of valores){
        if(numero(n)){
            if(op==0){
                op=n;
            } else{
                op=n;
            }
        }
    }
    
    alert(op-op2);
    alert(op+op2);
    alert(op*op2);
    alert(op/op2);

















