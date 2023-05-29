"use strict";

// Descripcion de los tipos
const descripcion_agua = "Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición."
const descripcion_planta = "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate"
const descripcion_electrico = "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad."
const descripcion_normal = "Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc."
const descripcion_fuego = "Los Pokémon de tipo tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones."

/* Comienza a escribir su código aquí */




// Selecciono todos los botones
let botones = document.querySelectorAll("section button");

botones.forEach(function(botones){
    botones.addEventListener("click",function(){
        let tipo = botones.classList.toString();
        // Selecciono el articulo
        let clase_articulo = document.querySelector("article");
        // Quito todas las clases del articulo
        clase_articulo.classList.remove(...clase_articulo.classList);

        if (tipo === "fuego"){
            // Le añado la clase nueva
            clase_articulo.classList.add("fuego");
            // Selecciono la etiqueta que tenga la clase header y modifico su texto
            clase_articulo.querySelector(".header").textContent = "Tipo Fuego";
            // Selecciono la etiqueta que tenga el id descripcion y modifico su texto
            clase_articulo.querySelector("#descripcion").textContent = descripcion_fuego;
            // Selecciono la etiqueta img y cambio su atributo src
            clase_articulo.querySelector("img").src = "./images/fire_type.png";
        }

        if (tipo === "agua"){
            clase_articulo.classList.add("agua");
            clase_articulo.querySelector(".header").textContent = "Tipo Agua";
            clase_articulo.querySelector("#descripcion").textContent = descripcion_agua;
            clase_articulo.querySelector("img").src = "./images/water_type.png";
        }

        if (tipo === "planta"){
            clase_articulo.classList.add("planta");
            clase_articulo.querySelector(".header").textContent = "Tipo Planta";
            clase_articulo.querySelector("#descripcion").textContent = descripcion_planta;
            clase_articulo.querySelector("img").src = "./images/grass_type.png";
        }

        if (tipo === "electricidad"){
            clase_articulo.classList.add("electricidad");
            clase_articulo.querySelector(".header").textContent = "Tipo Electrico";
            clase_articulo.querySelector("#descripcion").textContent = descripcion_electrico;
            clase_articulo.querySelector("img").src = "./images/electric_type.png";
        }

        if (tipo === "normal"){
            clase_articulo.classList.add("normal");
            clase_articulo.querySelector(".header").textContent = "Tipo Normal";
            clase_articulo.querySelector("#descripcion").textContent = descripcion_normal;
            clase_articulo.querySelector("img").src = "./images/normal_type.png";
        }

    });
});




// *****************************************
// ************  Otra forma  ***************
// *****************************************


// // Fuego
// // Añado un evento al hacer click en el boton
// document.querySelector("#btnFuego").addEventListener("click",function(){
//     // Selecciono el articulo
//     let clase_articulo = document.querySelector("article");
//     // Quito todas las clases del articulo
//     clase_articulo.classList.remove(...clase_articulo.classList);
//     // Le añado la clase nueva
//     clase_articulo.classList.add("fuego");
//     // Selecciono la etiqueta que tenga la clase header y modifico su texto
//     clase_articulo.querySelector(".header").textContent = "Tipo Fuego";
//     // Selecciono la etiqueta que tenga el id descripcion y modifico su texto
//     clase_articulo.querySelector("#descripcion").textContent = descripcion_fuego;
//     // Selecciono la etiqueta img y cambio su atributo src
//     clase_articulo.querySelector("img").src = "./images/fire_type.png";
// });


// // Agua
// document.querySelector("#btnAgua").addEventListener("click",function(){
//     let clase_articulo = document.querySelector("article");
//     clase_articulo.classList.remove(...clase_articulo.classList);
//     clase_articulo.classList.add("agua");

//     clase_articulo.querySelector(".header").textContent = "Tipo Agua";
//     clase_articulo.querySelector("#descripcion").textContent = descripcion_agua;
//     clase_articulo.querySelector("img").src = "./images/water_type.png";
// });


// // Planta
// document.querySelector("#btnPlanta").addEventListener("click",function(){
//     let clase_articulo = document.querySelector("article");
//     clase_articulo.classList.remove(...clase_articulo.classList);
//     clase_articulo.classList.add("planta");

//     clase_articulo.querySelector(".header").textContent = "Tipo Planta";
//     clase_articulo.querySelector("#descripcion").textContent = descripcion_planta;
//     clase_articulo.querySelector("img").src = "./images/grass_type.png";
// });


// // Electricidad
// document.querySelector("#btnElectricidad").addEventListener("click",function(){
//     let clase_articulo = document.querySelector("article");
//     clase_articulo.classList.remove(...clase_articulo.classList);
//     clase_articulo.classList.add("electricidad");

//     clase_articulo.querySelector(".header").textContent = "Tipo Electrico";
//     clase_articulo.querySelector("#descripcion").textContent = descripcion_electrico;
//     clase_articulo.querySelector("img").src = "./images/electric_type.png";
// });


// // Normal
// document.querySelector("#btnNormal").addEventListener("click",function(){
//     let clase_articulo = document.querySelector("article");
//     clase_articulo.classList.remove(...clase_articulo.classList);
//     clase_articulo.classList.add("normal");

//     clase_articulo.querySelector(".header").textContent = "Tipo Normal";
//     clase_articulo.querySelector("#descripcion").textContent = descripcion_normal;
//     clase_articulo.querySelector("img").src = "./images/normal_type.png";
// });