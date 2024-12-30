/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

let edadPermitida = prompt("Ingrese su edad");

if (edadPermitida >18) {
    document.write("Usted ya puede conducir");
} else{
    document.write("Usted no puede conducir");
}

