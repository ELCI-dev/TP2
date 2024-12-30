/* Ejercicios con Math

11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

/* con Math */

let nombre1 = prompt("Ingrese un nombre.");
let edad1 = parseInt(prompt(`Ingrese la edad de ${nombre1}`));

let nombre2 = prompt("Ingrese un nombre.");
let edad2 = parseInt(prompt(`Ingrese la edad de ${nombre2}`));

let nombre3 = prompt("Ingrese un nombre.");
let edad3 = parseInt(prompt(`Ingrese la edad de ${nombre3}`));

const edadMaxima = Math.max(edad1, edad2, edad3);

let personaMayor;
if (edadMaxima === edad1) {
    personaMayor = nombre1;
} else if (edadMaxima === edad2) {
    personaMayor = nombre2;
} else {
    personaMayor = nombre3;
}

document.write(`La persona mayor es ${personaMayor} con ${edadMaxima} años.`);


/* sin math

let nombre1 = prompt("Ingrese un nombre.");
let edad1 = prompt(`Ingrese la edad de ${nombre1}`);

let nombre2 = prompt("Ingrese un nombre.");
let edad2 = prompt(`Ingrese la edad de ${nombre2}`);

let nombre3 = prompt("Ingrese un nombre.");
let edad3 = prompt(`Ingrese la edad de ${nombre3}`);

if(edad1 > edad2 && edad1>edad3)
    {
document.write(`${nombre1} es mayor`)
} 
 else if(edad2>edad3 && edad2 > edad1)
{
    document.write(`${nombre2} es mayor`)
} 
    else (edad3 > edad1 && edad3 > edad2)
{
document.write(`${nombre3} es mayor`)
} */
