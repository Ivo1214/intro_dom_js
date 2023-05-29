"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

1)
Leer el título del "header" del post e imprimirlo en consola.   

2)
Cambiar título utilizando javascript por otro cualquiera.

*/

// Ejercicio 1
console.log(document.querySelector(".post-header h2").textContent);


// Ejercicio 2
document.querySelector(".post-header h2").textContent = "Hola";
