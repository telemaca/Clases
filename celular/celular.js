// Celular
class Celular {
    #contactos = []
    #llamadas = []

    #obtenerDatos = dato => this.#contactos.map(contacto => contacto[dato])

    agregarContacto = contacto => {
        const arrayNombres = this.#obtenerDatos("nombre")
        const arrayNumeros = this.#obtenerDatos("numero")
        if (arrayNombres.includes(contacto.nombre)) {
            throw new Error(`Ya hay un contacto con ese nombre`);
        }
        if (arrayNumeros.includes(contacto.numero)) {
            throw new Error(`Ya hay un contacto con ese número`);
        }
        this.#contactos.push(contacto)
    }

    buscarPorNombre = nombre => this.#contactos.find(contacto => contacto.nombre === nombre)

    buscarPorNumero = numero => this.#contactos.find(contacto => contacto.numero === numero)

    eliminarContacto = nombre => {
        const indiceContacto = this.#contactos.indexOf(this.buscarPorNombre(nombre))
        this.#contactos.splice(indiceContacto, 1)
    }

    llamar = nombre => {
        const contacto = this.buscarPorNombre(nombre)
        if (contacto !== undefined) {
            this.#llamadas.push(`Llamada a ${contacto.nombre} con número ${contacto.numero} realizada`)
        }
    }

    verContactos = () => this.#contactos.map(contacto => `${contacto.nombre}: ${contacto.numero}`).join(", ")

    verHistorial = () => this.#llamadas.join("\n")
}