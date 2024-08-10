let cedulaEmpleado;
let nombreEmpleado;
let diasLaborados;
let totalVentas;
let totalPrestamo;
let salarioBasico = 1300000;
let auxilioTrans;
let comisionVentas;
let totalDevengado;
let salarioNeto;

function recibirDatos() {
  cedulaEmpleado = parseFloat(prompt("Ingrese el número de cedúla"));
  nombreEmpleado = prompt("Ingrese el el nombre del empleado");
  diasLaborados = parseFloat(prompt("Ingrese el total de dias laborados"));
  totalVentas = parseFloat(prompt("Ingrese el total de ventas por mes"));
  totalPrestamo = parseFloat(prompt("Ingrese el valor del descuento de prestamos"));
  auxilioTrans = 162000 * diasLaborados / 30;
  comisionVentas = 0.02 * totalVentas;
  totalDevengado = salarioBasico + comisionVentas;
  salarioNeto = totalDevengado - totalPrestamo;

  mostrarDatosPago(
    cedulaEmpleado, nombreEmpleado, salarioBasico, auxilioTrans, comisionVentas, totalPrestamo, salarioNeto);
}

recibirDatos();

function mostrarDatosPago(
  cedulaEmpleado,
  nombreEmpleado,
  salarioBasico,
  auxilioTrans,
  comisionVentas,
  totalPrestamo,
  salarioNeto
) {
  document.write("<br>Cedula empleado: " + cedulaEmpleado);
  document.write("<br>Nombre empleado: " + nombreEmpleado);
  document.write("<br>Salario Basico: " + salarioBasico);
  document.write("<br>Auxilio de Transporte: " + auxilioTrans);
  document.write("<br>Comisión de Ventas: " + comisionVentas);
  document.write("<br>Salario Neto Por Recibir: " + salarioNeto);
  document.write("<br>Préstamos: " + totalPrestamo);
}