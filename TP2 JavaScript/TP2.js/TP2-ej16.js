/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */
const texto = prompt("Ingrese un texto");
let textoEnReversa = "";

for(let i =texto.length -1; i>=0; i--){
textoEnReversa += texto[i];
}

document.write(`El texto ingresado en reversa es: ${textoEnReversa}`);


/* 
OTRA OPCIÓN

let texto = prompt("Ingrese un texto.");
let textoAlRevés= texto.split("").reverse().join("");

document.write(`El texto ingresado en reversa es: ${textoAlRevés}`);
 */
