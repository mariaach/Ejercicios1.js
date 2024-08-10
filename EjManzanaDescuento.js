let kilosComprados, descCompra, totalCompra, totalCompraDesc; //4 variables

const valorKiloManzana = 4200;
let descCero = 0;
let descDiez = 0.1;
let descQuince = 0.15;
let descVeinte = 0.2;

kilosComprados = parseFloat(prompt("Ingrese cantidad de kilos comprados"));
seleccionarDescuento(kilosComprados);

function seleccionarDescuento(kilosComprados) {
  if (kilosComprados >= 0 && kilosComprados <= 2) {
    calcularMostrarDescuento(descCero, kilosComprados);
  } else if (kilosComprados >= 2.01 && kilosComprados <= 5) {
    calcularMostrarDescuento(descDiez, kilosComprados);
  } else if (kilosComprados >= 5.01 && kilosComprados <= 10) {
    calcularMostrarDescuento(descQuince, kilosComprados);
  } else {
    calcularMostrarDescuento(descVeinte, kilosComprados);
  }
}

function calcularMostrarDescuento(descuento, kilosComprados) {
  totalCompra = kilosComprados * valorKiloManzana;
  descCompra = totalCompra * descuento;
  totalCompraDesc = totalCompra - descCompra;
  document.write(
    "La compra de" +
      kilosComprados +
      "kilos tiene un valor de $" +
      totalCompra +
      ",pero tiene un descuento por valor de $" +
      descCompra +
      ", por lo tanto, el valor a pagar es: $" +
      totalCompraDesc
  );
}

function hola (num){
    for (let i = 1; i <= num; i++) {
        document.write("<hr>Hola"+i);
    }
}

hola(30);