const carrito = new Carrito
const producto1 = new Producto("Yerba Taragüí", 110, 1, false)
const producto2 = new Producto("Yerba 123", 98, 1, true)
const producto3 = new Producto("Yerba ABC", 200, 2, true)
const producto4 = new Producto("Yerba XYZ", 130, 2, false)
const producto5 = new Producto("Yerba 987", 74, 1, true)

carrito.agregarProductos(producto1)
carrito.agregarProductos(producto2)
carrito.agregarProductos(producto3)
carrito.agregarProductos(producto4)
carrito.agregarProductos(producto5)

// console.log(carrito.toString())