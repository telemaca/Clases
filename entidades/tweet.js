// Tweet
// Propiedades
// id (string)
// handle (string)
// texto (string)
// likes (array de Usuario), inicializa en []
// retweets (array de `Usuario), inicializa en []
// Constructor
// genera un id automático y lo asigna a su propiedad
// pide handle y texto como argumentos y los agrega a sus respectivas propiedades
// Métodos
// getters para obtener los valores de todas las propiedades
// darLike(usuario) agrega usuario a likes, si ya se encuentra en dicho array, debe removerlo de mismo
// retweetear(usuario) agrega usuario a retweets, si ya se encuentra en dicho array, debe removerlo de mismo

class Tweet {
    #id
    #usuario
    #texto
    #likes = []
    #retweets = []
    constructor(usuario, texto) {
        this.#usuario = usuario
        this.#texto = texto

        this.#id = uuidv4()
    }

    obtenerUsuario = () => this.#usuario
    obtenerTexto = () => this.#texto
    obtenerLikes = () => this.#likes
    obtenerRetweets = () => this.#retweets

    darLike = usuario => {
        if (!this.#likes.includes(usuario)) {
            this.#likes.push(usuario)
        } else {
            const index = this.#likes.indexOf(usuario)
            this.#likes.splice(index, 1)
        }
    }

    retwitear = usuario => {
        if (!this.#retweets.includes(usuario)) {
            this.#retweets.push(usuario)
        } else {
            const index = this.#retweets.indexOf(usuario)
            this.#retweets.splice(index, 1)
        }
    }
}

