class Gato {

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
