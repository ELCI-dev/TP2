/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

let sumaNumeros=0;

do{
let numero = prompt('Ingrese un número');
if(numero === null){
    break;
} else if (!isNan(numero)&& numero.trim() !==''){
    sumaNumeros += +(numero);
    } else {
        alert('${numero} no es valido')
    }
} while(true);
document.write('Total: ' + suma);