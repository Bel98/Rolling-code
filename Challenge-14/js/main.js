let saludo1=`Buen `;
let saludo2=`dia `;
let nombre=prompt(`Ingrese un nombre`);
document.write( `${saludo1 + saludo2}<br>`);
document.write( `${saludo1 + saludo2  + nombre} <br>`);
let numero= prompt(`ingrese un numero`);
let doble= document.write(`El doble del numero ingresado es: ${numero*2}<br>`);
let apellido= prompt(`Ingrese su apellido`)
let ultimaletra = (apellido.slice(-1));
document.write(`La ultima letra de su apellido es: ${ultimaletra}`);



