// Tweet
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

    //getters
    obtenerUsuario = () => this.#usuario
    obtenerTexto = () => this.#texto
    obtenerLikes = () => this.#likes
    obtenerRetweets = () => this.#retweets
    obtenerIdTweet = () => this.#id

    darLike = usuario => {
        if (!this.#likes.includes(usuario)) {
            this.#likes.push(usuario)
            return
        }
        
        const index = this.#likes.indexOf(usuario)
        this.#likes.splice(index, 1)
    }

    retwitear = usuario => {
        if (!this.#retweets.includes(usuario)) {
            this.#retweets.push(usuario)
            return
        } 
        
        const index = this.#retweets.indexOf(usuario)
        this.#retweets.splice(index, 1)
    }
}

