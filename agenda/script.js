// Agenda con Tareas

const tarea1 = new Tarea("Lavar la ropa", "casa", new Date(2020, 3, 10))
const tarea2 = new Tarea("Hacer las compras", "casa", new Date(2020, 3, 10))
const tarea3 = new Tarea("Hacer los ejercicios", "estudio", new Date(2020, 3, 12))
const tarea4 = new Tarea("Revisar estandares", "trabajo", new Date(2020, 3, 12))
const tarea5 = new Tarea("Hacer planilla", "trabajo", new Date(2020, 3, 10))

const agenda = new Agenda

agenda.agregar(tarea1)
agenda.agregar(tarea2)
agenda.agregar(tarea3)
agenda.agregar(tarea4)
agenda.agregar(tarea5)