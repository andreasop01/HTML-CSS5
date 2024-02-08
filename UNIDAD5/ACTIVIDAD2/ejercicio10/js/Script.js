/**

Función que verifica si la fecha es válida.
@param {number} dia - El día de la fecha.
@param {number} mes - El mes de la fecha.
@param {number} año - El año de la fecha.
@returns {boolean} - Retorna true si la fecha es válida y false si no lo es.
*/

const fecha = (dia, mes, año)=>{
    return dia>0 && mes>=1 && mes<=12 && año>0;
};
/**

Función que muestra la fecha en formato "dd de mes de aaaa" si es válida, de lo contrario muestra un mensaje de error.

@param {number} dia - El día de la fecha.

@param {number} mes - El mes de la fecha.

@param {number} año - El año de la fecha.
*/
const excepcion= (dia, mes, año)=>{

    let meses=[31,29,31,30,31,30,31,31,30,31,30,31];
    let nombreMes=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    if(dia<=meses[mes]){
        alert(dia+" de "+nombreMes[mes]+" de "+año)
       }else{
        alert("no es correcto")
       }
}

let mes=parseInt(prompt("dame mes"));
let dia=parseInt(prompt("dame dia"));
let año=parseInt(prompt("dame año"));

if (fecha (dia,mes,año)){
    mes--;

   excepcion(dia,mes,año);
    
}