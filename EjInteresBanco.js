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