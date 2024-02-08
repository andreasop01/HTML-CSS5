document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos todos los botones con la clase "button" y los guardamos en un arreglo
  var buttons = document.getElementsByClassName("button");

  // Iteramos sobre el arreglo y agregamos un event listener para escuchar el evento "click" de cada botón
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      // Obtenemos el elemento padre del botón (la caja) utilizando la propiedad "parentNode"
      var box = this.parentNode;

      // Cambiamos el fondo de la caja a amarillo utilizando la propiedad "style.backgroundColor"
      box.style.backgroundColor = "yellow";

      // Agregamos un nuevo elemento "p" al final del contenido de la caja utilizando el método "appendChild"
      var newParagraph = document.createElement("p");
      newParagraph.innerHTML = "Este es un nuevo párrafo agregado con JavaScript.";
      box.appendChild(newParagraph);
    });
  }

});
