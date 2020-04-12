// Tarea
class Tarea {
    #id
    #descripcion
    #categoria
    #vencimiento
    #finalizada = false

    constructor(descripcion, categoria, vencimiento) {
        this.#descripcion = descripcion
        this.#categoria = categoria
        this.#vencimiento = vencimiento
        this.#id = uuidv4()
    }

    //setter
    finalizar = () => {
        this.#finalizada = true
    }

    //getters
    obtenerId = () => this.#id
    obtenerDescripcion = () => this.#descripcion
    obtenerCategoria = () => this.#categoria
    obtenerVencimiento = () => this.#vencimiento
    finalizo = () => this.#finalizada
}