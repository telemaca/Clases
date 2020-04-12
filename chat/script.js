// Chat con Usuarios y Mensajes

const usuario1 = new Usuario("Flor")
const usuario2 = new Usuario("Jose")
const usuario3 = new Usuario("Lu")
const usuario4 = new Usuario("Dani")
const usuario5 = new Usuario("Sol")

const mensaje1 = new Mensaje(usuario1, usuario2, "Holaaaa!")
const mensaje3 = new Mensaje(usuario1, usuario2, "Cómo estás?")
const mensaje2 = new Mensaje(usuario1, usuario5, "Holaaaa!")

const chat = new Chat(usuario1)
chat.agregarContacto(usuario2)
chat.agregarContacto(usuario3)
chat.agregarContacto(usuario4) 

chat.mandarMensaje(mensaje1)
chat.mandarMensaje(mensaje3)