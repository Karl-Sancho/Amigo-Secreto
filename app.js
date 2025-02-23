// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []

let listaNombres = document.getElementById("listaAmigos");

function asingnarTextoElemento(elemento, texto) {
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
    return;
}

asingnarTextoElemento('h1', "¡Jueguemos al Amigo Secreto!");
asingnarTextoElemento('h2', "Indicame el nombre de tus amigos:");

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Por favor, agregar al menos 2 nombres para realizar el sorteo.");
    } else {
        let nombreAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let resultadoNombreAleatorio = listaAmigos[nombreAleatorio];
        asingnarTextoElemento('#resultado', `El amigo secreto sorteado es: ${resultadoNombreAleatorio}`);
    }
    return;
}

function agregarAmigo() {
    if ((document.getElementById('amigo').value) == "") {
        alert('Por favor ingrese un nombre valido.')
    } else {
        listaAmigos.unshift(document.getElementById('amigo').value);
        actualizarLista();
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    listaNombres.innerHTML = "";
    listaAmigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}