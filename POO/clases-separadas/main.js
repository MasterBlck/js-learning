import { Perro } from 'Perro.js';  //PEndiente por revisar cómo importar clases a nuestro archivo

console.log('Este es el main');
var perrito = new Perro('Oddie');

console.log('El perro se llama: ' +perrito.obtenerNombre());
perrito.ladrar();
