//Maneras de decolarar funciones en JS

//Primera forma: por medio de una declaración de variables:
var cuadrado = function(x){
    return x*x;
}

var i;
for (var i = 0; i < 10; i++) {
    console.log(cuadrado(i));
}


//Funciones Internas:
var landscape = function() {
    var result = "";

    //Una función interna puede ser declarada dentro de la función landscape()
    var flat = function(size) {
        for (var count = 0; count < size; count++)
            result += "_";
    }; //Fin de la declaración de la función interna flat()

    //función interna mountain()
    var mountain = function(size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };

    //Uso e implementación de las funciones internas flat() y mountain()
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);

    return result;
};
console.log(landscape());
// . ___/''''\______/'\_


//Declaración de funciones al estilo de C/C++
function cubo(x) {
    return Math.pow(x, 3);
}

var i = -10;
while (i <= 10) {
    console.log(cubo(i));
    i += 1;
}

//El código funciona incluso cuando definimos una función despues de que invocamos su llamado
console.log("The future says:", future());

function future() {
    return "We STILL have no flying cars.";
}


//Tolerancia de funciones al número de argumentos
function mypow(x, y){
    result = 1;
    if (y == undefined) {    //se valida si el el usuario le dá valor al segundo argumento
        y = 2;
    }

    for (var i = 1; i <= y; i++) {
        result *= x;
    }

    return result;
}

console.log(mypow(9));   // obtendremos 9^2
console.log(mypow(2, 10)); // obtendremos 2^10

//Si nos pasamos de los argumentos que hemos definido en la función, simplemente se ignoran los sobrantes
console.log(mypow(6, 3, 100));  //obtendremos 6^3



//Encerramiento de funciones
function envolverValor( n ){
    var variableLocal = n;

    //Aquí se puede devolver una funcion que se declara SIN NOMBRE y que también puede llevar argumentos
    return function() { return variableLocal; }   //se tiene acceso a la variable 'variableLocal' de la función envolverValor()
}

//asignación a 'variables'
var wrap1 = envolverValor(1);
var wrap2 = envolverValor(2);

//las variables wrap1, y wrap2 se convierten ahora en 'funciones' pero aquí no se les pasa argumentos
console.log( wrap1() );    //imprime 1
console.log( wrap2() );    //imprime 2

//Segundo ejemplo de encerramiento
function multiplicador( factor ){
    return function(numero){           //aparentemente 'numero' no tiene valor asignado
        return numero * factor;
    };
}


var twice = multiplicador(2);
console.log( twice(5) );     // De alguna forma se el 5 se asigna al argumento 'numero' que está dentro de la función multiplicador()

/******************************************EJERCICIOS PROPUESTOS********************************************************/

//Obtener el mínimo de 2 números
function min( n1, n2 ){
    if (n1 < n2) {
        return n1;
    } else if (n2 < n1){
        return n2;
    } else {
        return "Los 2 son iguales";
    }
}

console.log( min(90, 8) );
console.log( min(7, 200) );
console.log( min(7,7) );


//Saber si un número es par o impar recursivamente
function esPar( n ) {
    if ( n == 0 ) {     //zero es par
        return true;
    } else if (n == 1) {  // uno es impar
        return false;
    }else {
        return esPar( n - 2 );
    }
}

console.log( esPar(53) );
console.log( esPar(72) );

//Contar B's en una cadena
function contaBs( cadena ){
    var cont = 0;
    for (var i = 0; i < cadena.length ; i++) {
        if (cadena.charAt(i) == 'B') {
            cont += 1;
        }
    }

    return cont;
}

function contaCaracter( cadena, caracter ){
    var cont = 0;
    for (var i = 0; i < cadena.length ; i++) {
        if (cadena.charAt(i) == caracter) {
            cont += 1;
        }
    }

    return cont;
}

console.log( contaBs("Aquí no hay ninguna b mayúscula") );
console.log( contaBs("Aquí hay una B, ... mira quí hay otra B           y aquí otra más (B)") );

console.log( contaCaracter("Este es un texto de prueba", 'e') );
console.log( contaCaracter("Este texto contíene í acentuada", 'í') );
