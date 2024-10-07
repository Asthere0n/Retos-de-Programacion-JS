/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

let agendaDB = new Map([
    ['Alice', 1234567890],
    ['Bob', 2345678901],
    ['Charlie', 3456789012],
    ['David', 4567890123],
    ['Eve', 5678901234],
    ['Frank', 6789012345],
    ['Grace', 7890123456],
    ['Hank', 8901234567],
    ['Ivy', 9012345678],
    ['Jack', 0123456789]
])

const Agenda = new Object()

Agenda.check = function (Nombre, Numero = 0) {
    //Check for correct type
    if (typeof Nombre != 'string' || typeof Numero != 'number') {
        console.warn('Tipo de dato incorrecto.')
    } else if (Numero>9999999999){
        console.log('Introduce un numero valido.')
    }
    //Check if Nombre is on the database
    else {
        if (agendaDB.has(Nombre)) {
            return true
        } else {
            console.log(Nombre + ' no se encuentra en su agenda.')
            return false
        }
    }
}

Agenda.consulta = function (Nombre) {
    if (Agenda.check(Nombre, 0)) {
        console.log(Nombre + ':' + agendaDB.get(Nombre))
    }
}

Agenda.agregar = function (Nombre, Numero) {
    if (typeof Nombre != 'string' || typeof Numero != 'number') {
        console.warn('Tipo de dato incorrecto.')
    } else {
        agendaDB.set(Nombre, Numero)
    }
}
Agenda.borrar = function (Nombre) {
    if (Agenda.check(Nombre)) {
        console.warn(Nombre + ' has sido borrado de su lista de contactos.')
        agendaDB.delete(Nombre)
    }
}

Agenda.editar = function (Nombre, Numero) {
    if (Agenda.check(Nombre, Numero)) {
        agendaDB.set(Nombre, Numero)
    }
}

Agenda.mostrar = function(){
    for (person of agendaDB){
        console.log(person + ' : ' + agendaDB[person])
    }
}





