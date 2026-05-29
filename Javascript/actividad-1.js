// Actividad 1. Datos personales
// Consigna: Creá variables para tu nombre, edad, carrera y si estás cursando actualmente. Mostrá
// un mensaje completo usando interpolación de strings.

// Pista: Pensá cuáles variables deberían ser const y cuáles let.

const NOMBRE_COMPLETO = "Marcos Emmanuel Perlo";
let edad = 20 ;
let carrera = "Tecnicatura en Desarrollo de Software Multiplataforma";
let cursando = true;

console.log(`El alumno ${NOMBRE_COMPLETO} tiene ${edad} años, el esta cursando ${carrera}? la respuesta a eso es ${cursando}.`)