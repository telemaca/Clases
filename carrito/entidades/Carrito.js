// Carrito con Producto
class Carrito {
    #productos = []
    
    // agregarProducto(producto) agrega producto a `productos`
    agregarProductos = producto => {
        this.#productos.push(producto)
    }

    hallarIndice = id => {
        const productoSeleccionado = producto => producto.obtenerId(producto) === id
        return this.#productos.indexOf(this.#productos.find(productoSeleccionado))
    }

    // actualizarCantidadProducto(id, cantidad) actualiza la cantidad del producto en productos con id
    actualizarCantidadProducto = (id, cantidad) => {
        const productoSeleccionado = producto => producto.obtenerId(producto) === id
        this.#productos.find(productoSeleccionado).modificarCantidad(cantidad)
    }

    // eliminarProducto(id) elimina de productos el producto con id
    eliminarProducto = id => {
        const indiceProducto = this.hallarIndice(id)
        this.#productos.splice(indiceProducto, 1)
    }

    // calcularTotal() devuelve el total del carrito (con impuestos incluidos)
    calcularTotal = () => {
        const aPreciosFinales = producto => 
            producto.tieneImpuesto(producto) === true 
            ? Math.round(producto.obtenerPrecio(producto) * 1.1) * producto.cantidad
            : producto.obtenerPrecio(producto) * producto.cantidad

        const aTotal = (total, precioFinal) => total + precioFinal
        return this.#productos.map(aPreciosFinales).reduce(aTotal, 0)
    }

    // calcularImpuestoTotal() devuelve el total de la suma de los impuestos de cada producto que tieneImpuesto
    calcularImpuestoTotal = () => { 
        const aImpuestosTotales = (total, impuesto) => 
            total + Math.round(impuesto.obtenerPrecio(impuesto) * 0.1 * impuesto.cantidad)
        return this.#productos
                    .filter(producto => producto.tieneImpuesto(producto))
                    .reduce(aImpuestosTotales, 0)
    }

    // obtenerCantidadTotal() devuelve la cantidad total de ítems en el carrito
    obtenerCantidadTotal = () => {
        const aCantidadDeProductos = (total, parcial) => total + parcial.cantidad
        return this.#productos.reduce(aCantidadDeProductos, 0)
    }

    toString = () => {
        const aStrings = producto => 
            `${producto.obtenerNombre(producto)}: $${producto.obtenerPrecio(producto)}, cantidad: ${producto.cantidad}`
        
        const listaProductos = this.#productos.map(aStrings).join("\n")
        const total = this.calcularTotal()
        const totalImpuestos = this.calcularImpuestoTotal()

        return `Productos en el carrito:\n${listaProductos}\nSubtotal sin impuestos: $${total - totalImpuestos}\nSubtotal impuestos: $${totalImpuestos}\nTotal final: $${total}`
    }
}