var arreglo = [2, 3, 5, 7, 11];

console.log( arreglo[3] );
console.log( arreglo[1 - 1] );

//los arreglos de JS son escribibles
arreglo[2] = 9;

//Son imprimibles:
console.log( arreglo );

//Leyendo un arreglo desde el teclado--------------------------------------------------------
//Se pueden definir vacíos:
var arrVacio = [];
var tam = 10;

for (var i = 0; i < tam; i++) {
    //Los arreglos de JS son elásticos, esto quiere decir que podemos aumentar su tamaño en tiempo de ejecución
    arrVacio[i] = Number(prompt("Ingrese el valor para el arreglo[" + i + "]:"))
}

console.log( "El arreglo que se ingresó contiene: " +arrVacio);

//Métodos de Arreglos-----------------------------------------------------------------------
var cadena = "Esta es una cadena";

//longitud de la cadena o de un arreglo
console.log( cadena.length );

//Conversión a mayúsculas
console.log( cadena.toUpperCase() );


//Las cadenas de JS son Hererogéneas:
var arreglo = [34, 'hola', 67.9, '34', "diamante"];

console.log( arreglo );


//Se pueden tratar como estructuras dinámicas
var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
// . ["Mack", "the", "Knife"]
console.log(mack.join(" "));
// . Mack the Knife
console.log(mack.pop());
// . Knife
console.log(mack);
// . ["Mack", "the"]
