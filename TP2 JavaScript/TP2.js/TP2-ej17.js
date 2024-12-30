/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:

Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
 */

let texto = prompt("Ingrese un texto");
const textoMayus = texto.toUpperCase();
let primeraVocal ="";
let posicion=-1;

for(let i=0; i<textoMayus.length; i++){
    const caracter=textoMayus[i];
    if("AEIOU".includes(caracter)){
    posicion= i;
    primeraVocal=caracter;
    break;
}
}

if(posicion !== -1){
    document.write(`La primera vocal de ${texto} es ${primeraVocal}`);
} else {
    document.write("No se encontraron vocales.")
}

