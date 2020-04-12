// Twitter
// Propiedades
// usuarios (array de Usuario), inicializa vacío
// tweets (array de Tweet), inicializa vacío
// Métodos
// twittear(tweet) agrega tweet a tweets, si dicho tweet no se encuentra actualmente en el array
// obtenerTimeline(usuario) devuelve un array de tweets del usuario. Este array se compone de
// todos los tweets publicados por los usuarios que sigue
// todos los tweets likeados por los usuarios que sigue
// todos los tweets retweeteados por los usuarios que sigue
// no debe haber tweets repetidos
// deben estar ordenados de más nuevos a más viejos
// Observaciones
// Es recomendable crear métodos privados para simplificar obtenerTimeline

class Twitter {
    #usuarios = []
    #tweets = []

    twitear = (tweet) => {
        if (!this.#tweets.includes(tweet)) {
            this.#tweets.push(tweet)
        }
    }

    #obtenerTweetsPublicados = usuario => {
        const porUsuario = tweet => tweet.obtenerUsuario(tweet) === usuario
        return this.#tweets.filter(porUsuario)
    }

    #obtenerTweetsLikeados = usuario => {
        
        const likes = this.#tweets.obtenerLikes()
        
    }

    #obtenerTweetsRetwiteados = usuario => {
        
    }

    obtenerTimeline = usuario => {
        const timeline = []
        const seguidos = usuario.obtenerListaSiguiendo(usuario)
        seguidos.forEach(seguido => {
            const tweetsPublicados = this.#obtenerTweetsPublicados(seguido)
            const tweetsLikeados = this.#obtenerTweetsLikeados(seguido)
            timeline.push(tweetsPublicados)
            timeline.push(tweetsLikeados)
        });

        return timeline
    }
}