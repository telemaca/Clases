// Usuario
// Propiedades
// handle (string)
// siguiendo (array de Usuario), inicializa vacío
// Constructor
// pide handle como argumento y lo agrega a su respectiva propiedad
// Métodos
// seguir(usuario) agrega usuario a siguiendo, si no se encuentra ya en dicho array y si no es el propio usuario (no se puede seguir a sí mismo)
// getters para obtener los valores de todas las propiedades

class Usuario {
    #id
    #handle
    #siguiendo = []
   
    constructor(handle) {
        this.#handle = handle
  
        this.#id = uuidv4()
    }
    seguir = usuario => {
        if (!this.#siguiendo.includes(usuario) && usuario !== this.#handle) {
            this.#siguiendo.push(usuario)
        }
    }

    obtenerListaSiguiendo = () => this.#siguiendo
}