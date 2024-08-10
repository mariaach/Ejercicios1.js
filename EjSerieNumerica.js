// Función para generar y mostrar los primeros 20 términos de la serie
function imprimirSerie(num) {
    let termino = 1; // Primer término de la serie
    let incremento = 2; // Incremento inicial
    // Usamos un bucle para generar y mostrar los 20 términos
    for (let i = 1; i <= num; i++) {
        // Imprimir el término actual
        document.write(`${termino}<br>`);
        // Calcular el siguiente término
        termino += incremento;
        // Incrementar el valor del incremento
        incremento++;
    }
}
// Llamar a la función para imprimir la serie
imprimirSerie(50);