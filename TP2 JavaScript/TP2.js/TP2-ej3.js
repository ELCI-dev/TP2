/* 3- Realiza un script (programa) que pida cadenas de texto (palabra) hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

 */

let resultadoTextual= '';
do{
    let palabra = prompt('Ingrese una palabra').trim();
    //.trim() para quitar los espacios

    if(palabra === null){
        alert('Ingrese una palabra');
        break;
    } else if (resultadoTextual===''){
        resultadoTextual=palabra;
    } else{
        resultadoTextual = resultadoTextual + '-' + palabra
    }
} while(confirm('¿Desea continuar?'))

    document.write(resultadoTextual || 'No se ingresaron palabras')
