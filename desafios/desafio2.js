//Ejercicio 1
function primeroSaludo () {
    console.log("Hola,Mundo!");
    return;

}

primeroSaludo();

//Ejercicio 2 

function mostrarNombre(nombre) {
    console.log(`Hola ${nombre}`);
    return
}

mostrarNombre("eddy");

//Ejercicio 3

function numeroMultiplicado(numero) {
    return console.log(numero * 2)
}

numeroMultiplicado(32)

//Ejercicio 4

function promedioNumeros(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

promedioNumeros(4, 8, 9);
console.log(promedioNumeros);

//Ejercicio 5

function encontrarMayor(a, b) {
    return a > b ? a : b;
  }
  
  let numeroMayor = encontrarMayor(15, 9);
  console.log(numeroMayor);

//Ejercicio 6

function cuadrado(numero) {
    return numero * numero;
  }
  
  let resultado = cuadrado(2);
  console.log(resultado);