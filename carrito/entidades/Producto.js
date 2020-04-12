// Producto
class Producto {
    #id
    #nombre
    #precio
    cantidad
    #tieneImpuesto

    constructor (nombre, precio, cantidad, tieneImpuesto) {
        this.#nombre = nombre
        this.#precio = precio < 0 ? 0 : precio
        this.cantidad = cantidad < 0 ? 1 : cantidad
        this.#tieneImpuesto = tieneImpuesto
        this.#id = uuidv4()
    }

    //getters
    obtenerNombre = () => this.#nombre
    obtenerPrecio = () => this.#precio
    obtenerCantidad = () => this.cantidad
    tieneImpuesto = () => this.#tieneImpuesto
    obtenerId = () => this.#id

    //setter
    modificarCantidad = nuevaCantidad => {
        this.cantidad = nuevaCantidad
    } 
}