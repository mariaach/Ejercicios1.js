// Variables para almacenar datos
let totalPersonas = 0;
let totalHombres = 0;
let totalMujeres = 0;
let sumaEdadesHombres = 0;
let sumaEdadesMujeres = 0;
let edadMasJoven = Number.MAX_SAFE_INTEGER;//Constante su valor es 9007199254740991.
function calcularPromedio(sumaEdades, cantidad) {
    return cantidad === 0 ? 0 : sumaEdades / cantidad;
}
while (true) {
    let edad = parseInt(prompt("Ingrese la edad de la persona (0 para terminar):"));
    if (edad === 0) break;
    if (edad < 18) {
        alert("No se permiten menores de edad en la fiesta.");
        continue;
    }
    let sexo = prompt("Ingrese el sexo de la persona (H para hombre, M para mujer):").toUpperCase();
    totalPersonas++;
    if (sexo === 'H') {
        totalHombres++;
        sumaEdadesHombres += edad;
    } else if (sexo === 'M') {
        totalMujeres++;
        sumaEdadesMujeres += edad;
    } else {
        alert("Sexo no válido, por favor ingrese 'H' para hombre o 'M' para mujer.");
        continue;
    }
    if (edad < edadMasJoven) {
        edadMasJoven = edad;
    }
}
let promedioEdadHombres = calcularPromedio(sumaEdadesHombres, totalHombres);
let promedioEdadMujeres = calcularPromedio(sumaEdadesMujeres, totalMujeres);

document.write(`Cantidad total de personas que asistieron a la fiesta: ${totalPersonas}<br>`);
document.write(`Cantidad de hombres: ${totalHombres}<br>`);
document.write(`Cantidad de mujeres: ${totalMujeres}<br>`);
document.write(`Promedio de edad de los hombres: ${promedioEdadHombres.toFixed(2)}<br>`);
document.write(`Promedio de edad de las mujeres: ${promedioEdadMujeres.toFixed(2)}<br>`);
document.write(`Edad de la persona más joven que asistió: ${edadMasJoven}<br>`);