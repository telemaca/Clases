// Librería con Libros con Autor

const borges = new Autor("Jorge Luis Borges", "argentino")
const puig = new Autor("Manuel Puig", "argentino")
const homero = new Autor("Homero", "griego")

const iliada = new Libro("La Ilíada", homero, 450, "épica", 3)
const boquitas = new Libro("Boquitas pintadas", puig, 325, "novela", 6)
const arania = new Libro("El beso de la mujer araña", puig, 465, "novela", 9)
const ficciones = new Libro("Ficciones", borges, 320, "cuentos", 2)

const libreria = new Libreria()
libreria.agregar(iliada)
libreria.agregar(boquitas)
libreria.agregar(ficciones)
libreria.agregar(arania)