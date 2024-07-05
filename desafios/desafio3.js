//Ejercicio 1

function calculaIMC (altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
    
}

//Ejercicio 2

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  
//Ejercicio 3 

function convertirDolaresAReales(dolares) {
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
  }
  // Ejemplo de uso
  let valorEnDolar = 50;
  let valorEnReales = convertirDolaresAReales(valorEnDolar);
  console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);
  

//Ejercicio 4

function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let altura = 3; // en metros
  let anchura = 5; // en metros
  calcularAreaYPerimetroRectangular(altura, anchura);
  
//Ejercicio 5

function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let radio = 4; // en metros
  calcularAreaYPerimetroCircular(radio);
  
//Ejercicio 6

function mostrarTablaDeMultiplicar(numero1) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero1 * i;
      console.log(numero1 + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero1 = 7;
  mostrarTablaDeMultiplicar(numero1);
  