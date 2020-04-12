class BilleteraVirtual {
    #monto
    #operaciones = []

    constructor(montoInicial) {
        this.#monto = montoInicial
    }

    agregarGasto = gasto => {
        this.#monto -= gasto.cantidad
        gasto.tipo = "GASTO"
        this.#operaciones.push(gasto)
    }

    agregarGanancia = ganancia => {
        this.#monto += ganancia.cantidad
        ganancia.tipo = "GANANCIA"
        this.#operaciones.push(ganancia)
    }

    eliminarPropiedadTipo = operaciones => {
        const sinTipo = operacion => ({
            descripcion: operacion.descripcion, 
            cantidad: operacion.cantidad, 
            fecha: operacion.fecha, 
            categoria: operacion.categoria
        })
        
        return operaciones.map(sinTipo)
    }

    obtenerGastosPorMes = mes => {
        const gastosMes = this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes 
                                                                && operacion.tipo === "GASTO")
        return this.eliminarPropiedadTipo(gastosMes)
    }

    obtenerGanaciasPorMes = mes => {
        const gananciasMes = this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes 
                                                                    && operacion.tipo === "GANANCIA")
        return this.eliminarPropiedadTipo(gananciasMes)
    }
    
    obtenerGastosPorCategoria = categoria => {
        const gastosPorCategoria = this.#operaciones.filter(operacion => operacion.categoria === categoria 
                                                            && operacion.tipo === "GASTO")
        return this.eliminarPropiedadTipo(gastosPorCategoria)
    }

    obtenerGanaciasPorCategoria = categoria => {
        const gananciasPorCategoria = this.#operaciones.filter(operacion => operacion.categoria === categoria 
                                                            && operacion.tipo === "GANANCIA")
        return this.eliminarPropiedadTipo(gananciasPorCategoria)
    }

    calcularTotalPorMes = mes => {
        const aMonto = (total, gastoParcial) => total += gastoParcial.cantidad
        const gastosMes = this.obtenerGastosPorMes(mes).reduce(aMonto, 0)
        const gananciasMes = this.obtenerGanaciasPorMes(mes).reduce(aMonto, 0)
        return gananciasMes - gastosMes
    }

    calcularTotalPorCategoria = categoria => {
        const aMonto = (total, gastoParcial) => total += gastoParcial.cantidad
        const gastosCategoria = this.obtenerGastosPorCategoria(categoria).reduce(aMonto, 0)
        const gananciasCategoria = this.obtenerGanaciasPorCategoria(categoria).reduce(aMonto, 0)
        return gananciasCategoria - gastosCategoria
    }

    obtenerMonto = () => this.#monto
}

// const billeteraVirtual = new BilleteraVirtual(2000)
// const gasto1 = {descripcion: "Super", cantidad: 350, fecha: new Date(2020, 3, 5), categoria: "Compras"}
// const gasto2 = {descripcion: "Factura Internet", cantidad: 570, fecha: new Date(2020, 3, 6), categoria: "Servicios"}
// const gasto3 = {descripcion: "Verduleria", cantidad: 390, fecha: new Date(2020, 3, 6), categoria: "Compras"}
// const ganancia1 = {descripcion: "Venta de ropa usada", cantidad: 450, fecha: new Date(2020, 3, 6), categoria: "Ventas"}
// const ganancia2 = {descripcion: "Regalo de cumple", cantidad: 500, fecha: new Date(2020, 3, 7), categoria: "Regalos"}
// billeteraVirtual.agregarGasto(gasto1)
// billeteraVirtual.agregarGasto(gasto2)
// billeteraVirtual.agregarGasto(gasto3)
// billeteraVirtual.agregarGanancia(ganancia1)
// billeteraVirtual.agregarGanancia(ganancia2)