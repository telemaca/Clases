// Libro

// Métodos
// tieneStock() devuelve true si stock es mayor a 0, false sino
// getters para obtener los valores de todas las propiedades, menos stock
// setter para modificar los valores de precio y stock
// Observaciones
// stock y precio tienen como valor mínimo 0

class Libro {
    #id
    #titulo
    #autor
    #precio
    #genero
    #stock

    constructor(titulo, autor, precio, genero, stock) {
        this.#titulo = titulo
        this.#autor = autor
        this.#precio = precio < 0 ? 0 : precio
        this.#genero = genero
        this.#stock = stock < 0 ? 0 : stock
        this.#id = uuidv4()
    }

    //getters
    tieneStock = () => this.#stock > 0
    obtenerTitulo = () => this.#titulo
    obtenerAutor = () => this.#autor
    obtenerPrecio = () => this.#precio
    obtenerGenero = () => this.#genero
    obtenerId = () => this.#id

    //setters
    modificarPrecio = nuevoPrecio => {
        return nuevoPrecio < 0 ? this.#precio = 0 : this.#precio = nuevoPrecio
    }
    modificarStock = nuevoStock => {
        this.#stock += nuevoStock
        return this.stock < 0 ? 0 : this.#stock
    }

}