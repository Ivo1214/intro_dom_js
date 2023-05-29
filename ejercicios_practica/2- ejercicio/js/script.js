"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/


// Ejercicio 1
document.querySelector("#boton1").textContent= "Pegar";
document.querySelector("#boton2").textContent= "Copiar";
document.querySelector("#boton3").textContent= "Cortar";


// Ejercicio 2
// querySelectorAll guarda todos los elementos que coincidan con la busqueda, quedando un array que luego puedo recorrer
let elementos = document.querySelectorAll(".btn");

// Se realiza una iteracion por cada elemento contenido en el array
elementos.forEach(function(elementos){
    elementos.classList.add("agua");
});
