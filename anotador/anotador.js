// Anotador
class Anotador {
    #titulo
    #notas = []

    constructor(titulo) {
        this.#titulo = titulo
    }

    agregarNota = nota => this.#notas.push(nota)

    actualizarNota = (id, nota) => this.#notas[id] = nota

    obtenerNota = id => this.#notas[id]

    eliminarNota = id => this.#notas.splice(id, 1)

    eliminarNotas = () => this.#notas = []

    listarNotas = () => {
        const aString = nota => `${this.#notas.indexOf(nota)+1}. ${nota}`

        const notas = this.#notas
                            .map(aString)   
                            .join("\n")

        return `${this.#titulo}:\n------------------\n${notas}`
    }
}