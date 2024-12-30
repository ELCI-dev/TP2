/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
…… */

let numero = prompt("Por favor ingrese un número del 1 al 50");
numero = +(numero);

if(numero>= 1 && numero<=50){
for(let i= 1; i<=numero; i++){
    let lineaPiramidal = "";
    
    for(let j=1; j <=i; j++){
        lineaPiramidal += j;
    }
    document.write( `${lineaPiramidal}</br>`)
}
} else{
    alert("Ingresó un valor fuera del rango solicitado");
}