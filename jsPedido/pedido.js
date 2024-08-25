"use strict";

/*menu*/

let btnMenu = document.querySelector(".btn-menu");

btnMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    let menu = document.querySelector(".navigation");
    menu.classList.toggle("show");
}

/*formulario y tabla*/

let pedidos = [];//creo una lista vacía

console.log(pedidos);//imprimo los pedidos en la consola
console.table(pedidos);//imprimo los pedidos en una tabla

//le asigno variables a los inputs, botones y la tabla
let inputComidas = document.querySelector("#comidas");
let inputBebidas = document.querySelector("#bebidas");
let btnAgregar = document.querySelector("#agregar");
let btnBorrar = document.querySelector("#borrar");
let tabla = document.querySelector("#tbody");

btnAgregar.addEventListener("click", agregar);//al hacer click en el btnAgregar, cumplir la funcion "agregar" 
btnBorrar.addEventListener("click", borrar);//al hacer click en el btnAgregar, cumplir la funcion "borrar"
//llamo a las dos funciones
mostrar(pedidos, tabla);
borrar();
//creo la funcion agregar
function agregar(){

    let comida = inputComidas.value;//le agrego una variable al inputComidas
    let bebida = inputBebidas.value;//le agrego una variable al inputBebidas

    let pedido = {// aca son los elementos que van a ser agregados a la lista, o sea lo que el usuario ingrese.
        comida: comida,
        bebida: bebida
    }

    pedidos.push(pedido);//agrega los elementos a la lista
    console.table(pedidos);//muestra la lista en la consola
    console.log(pedido);//muestra el elemento en la consola

    mostrar(pedidos, tabla);//llamo la funcion mostrar
    // esto hace que una vez presionado el btnAgregar los espacios de bebida y comida se limpien automaticamente para luego volver a poner elementos sin refrescar la pagina.
    inputBebidas.value = "";
    inputComidas.value = "";
}
//defino la funcion mostrar
function mostrar(lista, contenido){
    contenido = "";// esto es para que al iniciar el contenido este en blanco
    for(let item of lista) {// en cada iteracion los elementos que agregue el usuario van a ser cargados en la tabla
        contenido += "<tr>";
        contenido += "<td>" + item.comida + "</td>";
        contenido += "<td>" + item.bebida + "</td>";
        contenido += "</tr>";
    }

    tabla.innerHTML = contenido;//actualiza el contenido del HTML dentro del elemento tabla, segun lo que dice la funcion mostrar
}

function borrar(){
    pedidos = [];//llamo la lista vacía
    mostrar(pedidos,tabla);//y llamo la funcion mostrar, para "imprimir en blanco", es decir la tabla vacía
}