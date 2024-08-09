function calcularSaldoFuturo(valorPresente, interesMensual, anios) {
    let meses = anios * 12;
    let valorFuturo = valorPresente * Math.pow((1 + interesMensual), meses);
    return valorFuturo;
}
let valorPresente = parseFloat(prompt("Ingrese la cantidad de dinero a depositar:"));
let anios = parseFloat(prompt("Ingrese el total de años que quiere recibir intereses:"));
let interesMensual = 0.02; // 2% mensual
let valorFuturo = calcularSaldoFuturo(valorPresente, interesMensual, anios);

document.write(`El valor consignado: $${valorPresente.toFixed(2)}<br>`);
document.write(`El valor futuro en ${anios} años es: $${valorFuturo.toFixed(2)}`);


/*una persona deposita hoy al Banco cierta cantidad de dinero, donde le reconocen un
interés del 2% mensual, capitalizado mensualmente. ¿Cuál será el saldo al cabo de 5 años?
Formula a utilizar:
Valor Futuro = Valor Presente * (1+intereses) ^meses
Para solucionar el Ejercicio, se requiere desarrollar un algoritmo que permita conocer a una persona ¿Cuál será
el saldo al cabo de 5 años?, si al depositar hoy cierta cantidad de dinero. Como resultado se debe imprimir en
pantalla:
Valor consignado: $XXXXX
Valor futuro en 5 años: $XXXXXXX*/