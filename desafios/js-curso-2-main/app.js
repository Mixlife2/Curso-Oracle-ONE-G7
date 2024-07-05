
//Ejercicio 2
let titulo = document.querySelector("h1");
titulo.innerHTML =   "Hora del Desafío";

//Ejercicio 3
function mensajeConsola() {
    console.log('El botón fue clicado!')
}

//Ejercicio 4
function mensajePrompt() {
let ciudad = prompt("Escriba el nombre de una ciudad de Brasil: ");
alert(`Estuve en ${ciudad} y me acorde de ti`)
}

//Ejercicio 5
function mensajeAlert() {
    alert("Yo amo JS")
}

//Ejercicio 6
function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert('${primerNumero} + ${segunNumero} = ${resultado}')
}