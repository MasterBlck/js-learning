/*console.log("Hola esto es prueba ;)");

function cambiarTexto() {
    document.getElementById('entrada').innerHTML = "Párrafo cambiado";
}
*/

//Clase Estilo EcMAScript 5
class Gato {        //declaración de clase

    constructor( nombre ) {
        this.nombre = nombre;
    }

    establecerNombre( nombre ){
        this.nombre = nombre;
    }

    obtenerNombre(){
        return this.nombre;
    }

    maullar(){
        console.log("miauuuuu");
    }
}

//En éste archivo se describe la manera más básica de usar una clase en JS en el Formato de EcMAScript 6
let gatito = new Gato('Garfield');

console.log('El gato se llama: ' +gatito.obtenerNombre());
gatito.maullar();
