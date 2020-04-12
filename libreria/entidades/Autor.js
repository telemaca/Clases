// Autor
// Propiedades
// nombre (string)
// nacionalidad (string)
// Constructor
// pide como argumentos nombre y nacionalidad y los asigna a sus respectivas propiedades
// Métodos
// getters para obtener los valores de todas las propiedades

class Autor {
    #nombre
    #nacionalidad

    constructor(nombre, nacionalidad) {
        this.#nombre = nombre
        this.#nacionalidad =nacionalidad
    }

    obtenerNombreAutor = () => this.#nombre
    obtenerNacionalidadAutor = () => this.#nacionalidad
}