/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */
let numero = prompt('Por favor ingrese un número entre 1 y 50')
numero = +(numero);
if(numero >=1 && numero <=50){
    for(let i=numero; i>=1; i--){
    let lineaPiramidal = "";

    for(let j=0; j<i; j++){

        lineaPiramidal  += i ;
    }
    document.write(`${lineaPiramidal}</br>`);
    
}
} else {
    alert("El valor ingresado está fuera del rango solicitado.")
}