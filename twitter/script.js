// Twitter con Tweets y Usuarios
const usuario1 = new Usuario("Flor")
const usuario2 = new Usuario("Jose")
const usuario3 = new Usuario("Lu")
const usuario4 = new Usuario("Dani")
const usuario5 = new Usuario("Sol")

usuario1.seguir(usuario2)
usuario1.seguir(usuario3)
usuario1.seguir(usuario4)

const tweet1 = new Tweet(usuario4, "1 2 3 4 5 6 7 8 9")
tweet1.darLike(usuario2)
tweet1.darLike(usuario3)
tweet1.retwitear(usuario3)
tweet1.retwitear(usuario1)

const tweet2 = new Tweet(usuario2, "abcdef")
tweet2.darLike(usuario1)
tweet2.darLike(usuario3)
tweet2.retwitear(usuario5)
tweet2.retwitear(usuario4)

const tweet3 = new Tweet(usuario3, "aeiou")
tweet2.darLike(usuario5)
tweet2.darLike(usuario1)
tweet2.retwitear(usuario2)
tweet2.retwitear(usuario4)

const tweet4 = new Tweet(usuario5, "dfgtre")

const twitter = new Twitter()

twitter.twitear(tweet1)
twitter.twitear(tweet2)
twitter.twitear(tweet3)
twitter.twitear(tweet4)

console.log(twitter.obtenerTimeline(usuario1))