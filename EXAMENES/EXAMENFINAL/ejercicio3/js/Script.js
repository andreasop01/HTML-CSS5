function entre(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var opciones = ["piedra", "papel", "tijera"];
var opcionMaquina = entre(0,2);

alert("Vamos a jugar Piedra,Papel o Tijera !")
alert("Que eliges, Piedra, Papel o Tijera? ")


const piedra=document.getElementById("piedra");
piedra.addEventListener("click",()=>{

    alert("Javascript eligió : " + opciones[opcionMaquina] + " Tu has elegido : "+ "piedra");

    if(opciones[opcionMaquina] == "piedra")
    {
        alert("Empate!");
    }
    else if(opciones[opcionMaquina] == "papel")
    {
        alert("Perdiste :( ");
    }
    else if(opciones[opcionMaquina]== "tijera")
    {
        alert("Ganaste!");
    }
    
});

const papel=document.getElementById("papel");
papel.addEventListener("click",()=>{
    
    alert("Javascript eligió : " + opciones[opcionMaquina] + " Tu has elegido : "+ "papel");
     
    if(opciones[opcionMaquina] == "piedra")
    {
        alert("Ganaste!");
    }
    else if(opciones[opcionMaquina] == "papel")
    {
        alert("Empate! ");
    }
    else if(opciones[opcionMaquina]== "tijera")
    {
        alert("Perdiste :( !");
    }
});

const tijera=document.getElementById("tijera");
tijera.addEventListener("click",()=>{

    alert("Javascript eligió : " + opciones[opcionMaquina] + " Tu has elegido : "+ "tijera");
    
    if(opciones[opcionMaquina] == "piedra")
    {
        alert("Perdiste :( !");
    }
    else if(opciones[opcionMaquina] == "papel")
    {
        alert("Ganaste ");
    }
    else if(opciones[opcionMaquina]== "tijera")
    {
        alert("Empate!");
    }
});

















