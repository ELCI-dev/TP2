/* 15- Realiza un script que cuente el número de vocales que tiene un texto. */

let texto = prompt("Ingrese un texto");
let textoMay = texto.toUpperCase();

let contadorVocales = 0;

for(let i = 0; i<textoMay.length; i++) {
    if ("AEIOU".includes(textoMay[i])){
        contadorVocales++;
    }
    }

document.write(`El número de vocales es: ${contadorVocales}`);