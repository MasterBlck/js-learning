alert("Un mensaje simple");

var respuesta = confirm("Presiona un botón");

if (respuesta == true) {
    console.log("Tu presionaste OK! :)");
} else {
    console.log("Tu presionaste Cancel! :'()'");
}

var valor = prompt("Ingrese algún valor", "teclea aquí...")

console.log("El valor introducido es: " +valor);

//-------------------Verificando los tipos de datos----------------

var valor = prompt("Ingrese algún valor", "teclea aquí...")

if ( isNaN(valor) ) {
    console.log( "El valor introducido fué un string" );
}else {
    console.log( "El valor introducido fué un número" );
}

console.log("El valor introducido es: " +valor);
