// Mensaje
// Propiedades
// remitente (Usuario)
// destinatario (Usuario)
// texto (string)
// fecha (Date), inicializa con la fecha actual (new Date())
// Constructor
// pide las propiedades no inicializadas como argumentos y las asigna según corresponda
// Métodos
// getters para obtener los valores de todas las propiedades

class Mensaje {
    #remitente
    #destinatario
    #texto
    #id
    #fecha = new Date()

    constructor(remitente, destinatario, texto) {
        this.#remitente = remitente
        this.#destinatario = destinatario
        this.#texto = texto
        this.#id = uuidv4()
    }

    obtenerRemitente = () => this.#remitente
    obtenerDestinatario = () => this.#destinatario
    obtenerTexto = () => this.#texto
    obtenerFecha = () => this.#fecha
    obtenerIdMensaje = () => this.#id
} 