//Objetos agrupados:
var objeto1 = {
//  variable : valor
    squirrel : false,
    events : ["work", "touched tree", "pizza", "running", "television"]
};

//imprimiendo el valor de objeto.squirrel;
console.log( objeto1.squirrel );

console.log( objeto1.wolf );

console.log( objeto1 );

objeto1.lobo = false;

console.log( objeto1.lobo );

console.log( objeto1 );


//Variables de objetos con comillas:
var descripciones = {
    trabajo : "Fué a trabajar",
// var con comillas
    "arbol" : "arbol verde"
}

console.log( descripciones );
console.log( descripciones."arbol" );   //ésto da error
console.log( descripciones.arbol );     //imprime 'arbol verde'


//Borracdo atributos en los Objetos
var unObjeto = {
    izquierda : 1,
    derecha : 2
};

console.log( unObjeto.izquierda );
console.log( unObjeto );

//Con delete borramos un atributo de un objeto
delete unObjeto.izquierda;

console.log( unObjeto.izquierda );
console.log( unObjeto );


//Verificando si los valores existen:
console.log( "izquierda" in unObjeto );
console.log( "derecha" in unObjeto );
