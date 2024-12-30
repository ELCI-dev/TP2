/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’ */

const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

function calcularLetraDNI() {
    while (true) {
        let dniIngresado = prompt("Introduce un número de DNI (0-99999999) o pulsa Cancelar para salir:");

        if (dniIngresado === null) {
            alert("Salió del programa.");
            break;
        }

        const dni = parseInt(dniIngresado, 10);
        
        if (isNaN(dni) || dni < 0 || dni > 99999999) {
            alert("Por favor, introduce un número válido entre 0 y 99999999.");
            continue;
        }
        const resto = dni % 23;
        const letra = letras[resto];
        alert(`El número ${dni} tiene como letra correspondiente: ${letra}`);
    }
}

calcularLetraDNI();
