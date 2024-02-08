document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos el botón con el ID "list-button"
  var listButton = document.getElementById("list-button");

  // Agregamos un event listener para escuchar el evento "click" del botón
  listButton.addEventListener("click", function () {
    // Obtenemos la lista <ul> de la página
    var list = document.getElementsByTagName("ul")[0];

    // Creamos un nuevo elemento <li>
    var newItem = document.createElement("li");
    newItem.innerText = "Nuevo elemento";

    // Agregamos el nuevo elemento a la lista
    list.appendChild(newItem);
  });


});
