"use strict";
let btnMenu = document.querySelector(".btn-menu");

btnMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    let menu = document.querySelector(".navigation");
    menu.classList.toggle("show");
}

//parte de la ruleta

//aca llamo al boton y declaro la funcion que va a hacer al presionarlo.
let btnJugar = document.querySelector("#btn-jugar").addEventListener("click", function () {
    //llamo al input y al numero aleatorio
    let usuario = parseInt(document.querySelector("#azar").value);
    let num = Math.floor((Math.random() * 37));
    //imprimo el numero aleatorio
    document.querySelector("#mensaje").innerHTML = "El numero aleatorio es: " + num;
    //esto hace que una vez que el usuario ingrese un numero y presione "jugar" el espacio se pondra en blanco automaticamente para volver a poner otro numero a sortear.
    document.querySelector("#azar").value = "";
    //aca voy a obtener el puntaje actual del usuario (100)
    let puntaje_usuario = parseInt(document.querySelector("#puntaje").innerHTML);
    //Aca si un numero esta fuera de rango, marcar un mensaje
    if (usuario < 0 || usuario > 36 ) {
        document.querySelector("#mensaje").innerHTML = "Número fuera de rango";
        console.log("error");
        return;
    }

    //aca sumar si el numero ingresado coincide con el aleatorio
    if (parseInt(usuario) === parseInt(num)) {
        console.log("Número ingresado por el usuario:", usuario);
        puntaje_usuario += 40;
        document.querySelector("#mensaje_gano").innerHTML = "Ganaste! sumaste 40 puntos: " + puntaje_usuario;
        document.querySelector("#mensaje_perdio").innerHTML = ""

    }
    // aca si no coincide le resta
    if (usuario != num){
        puntaje_usuario -= 10;
        document.querySelector("#mensaje_perdio").innerHTML = "Perdiste. Restaste 10 puntos: " + puntaje_usuario;
        document.querySelector("#mensaje_gano").innerHTML = ""
    }
    // aca avisa si se queda sin saldo
    if (puntaje_usuario <= 0) {
        console.log("error");
        document.querySelector("#sin_saldo").innerHTML = "Te quedaste sin saldo";
        document.querySelector("#puntaje").innerHTML = "";
        return;
    }
    //aca muestra el puntaje que va cambiando
    document.querySelector("#puntaje").innerHTML = puntaje_usuario;
})

