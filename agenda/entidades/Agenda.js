// Agenda
class Agenda {
    #tareas = []

    agregar = tarea => {
        this.#tareas.push(tarea)
    }
    
    obtener = id => {
        return this.#tareas.find(tarea => tarea.obtenerId(tarea) === id)
    }

    eliminar = id => {
        const indiceTarea = this.#tareas.indexOf(this.obtener(id))
        this.#tareas.splice(indiceTarea, 1)
    }

    finalizar = id => {
        const tarea = this.obtener(id)
        tarea.finalizar(tarea)
    }

    obtenerTodas = () => {
        return this.#tareas.map(tarea => tarea.obtenerDescripcion(tarea))
    }

    filtrarActivas = () => {
        return this.#tareas.filter(tarea => tarea.finalizo(tarea) === false)
    }

    filtrarFinalizadas = () => {
        return this.#tareas.filter(tarea => tarea.finalizo(tarea) === true)
    }

    filtrarPorCategoria = categoria => {
        return this.#tareas.filter(tarea => tarea.obtenerCategoria(tarea) === categoria)
    }

    // fecha es un string con este formato: "12/4/2020". Si hay que validar distintos tipos de formatos de fechas, hay que agregar  más cosas
    filtrarPorVencimiento = fecha => {
        return this.#tareas.filter(tarea => tarea.obtenerVencimiento(tarea).toLocaleDateString() === fecha)
    }
}