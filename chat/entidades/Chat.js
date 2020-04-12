// Chat

class Chat {
    #usuario
    #contactos = []
    #mensajes = []

    constructor(usuario) {
        this.#usuario = usuario
    }

    agregarContacto = usuario => {
        this.#contactos.push(usuario)
    }

    mandarMensaje = mensaje => {
        const destinatario = mensaje.obtenerDestinatario(mensaje)
        if (!this.#contactos.includes(destinatario)) {
            throw new Error(`El usuario "${destinatario.obtenerNombre(destinatario)}" no está en la lista de contactos.`)
        }
        if (this.#mensajes.includes(mensaje)) {
            throw new Error(`Ya enviaste ese mensaje.`)
        }

        this.#mensajes.push(mensaje)
    }
    
    obtenerContactos = () => this.#contactos
    obtenerMensajes = () => this.#mensajes
    
    filtrarPorContacto = id => {
        const porContacto = mensaje => {
            const destinatario = mensaje.obtenerDestinatario(mensaje)
            return destinatario.obtenerIdUsuario(destinatario) === id
        }
        
        return this.#mensajes.filter(porContacto)
    }

    // fecha es un string con formato "12/4/2020". Si hay que validar distintos tipos de formatos de fechas, hay que agregar más cosas
    filtrarPorFecha = fecha => {
        const porFecha = mensaje => mensaje.obtenerFecha(mensaje).toLocaleDateString() === fecha
        return this.#mensajes.filter(porFecha)
    }
} 