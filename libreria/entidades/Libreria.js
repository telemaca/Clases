
// Libreria

// filtrarPorGenero(genero) devuelve un array de libros con genero
// comprarLibros(idLibros) toma un array de ids de libros, si tienen stock, reduce el stock de dichos libros en 1 y suma a ganancias el precio de cada libro comprado
// obtenerGanancias devuelve ganancias

class Libreria {
    #libros = []
    #ganancias = 0 

    agregar = libro => this.#libros.push(libro)

    buscarPorId = id => {
        return this.#libros.find(libro => libro.obtenerId(libro) === id)
    }

    eliminar = id => {
        const indice = this.#libros.indexOf(this.buscarPorId(id))
        this.#libros.splice(indice, 1)
    }

    buscarPorTitulo = titulo => {
        return this.#libros.find(libro => libro.obtenerTitulo(libro) === titulo)
    }

    filtrarPorAutor = autor => {
        return this.#libros.filter(libro => libro.obtenerAutor(libro) === autor)
    }
    
    filtrarPorGenero = genero => {
        return this.#libros.filter(libro => libro.obtenerGenero(libro) === genero)
    }


    comprarLibros = idLibros => {
        idLibros.forEach(id => {
            const libro = this.buscarPorId(id)
            if (libro.tieneStock()) {
                libro.modificarStock(-1)
                const precio = libro.obtenerPrecio(libro)
                this.#ganancias += precio
            }
        });
    }

    obtenerGanancias = () => this.#ganancias
}