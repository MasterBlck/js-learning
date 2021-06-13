export class Perro {
    constructor( nombre ) {
        this.nombre = nombre;
    }

    obtenerNombre(){
        return this.nombre;
    }

    establecerNombre( nombre ){
        this.nombre = nombre;
    }

    ladrar(){
        console.log('Guauuu guau');
    }
}
