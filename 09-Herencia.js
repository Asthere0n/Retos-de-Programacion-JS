/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 */


/*
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */


class Empleado {
    constructor(nombre, centro, employmentNumber){
        this.nombre = nombre;
        this.centro = centro;
        this.employmentNumber = employmentNumber
    }

    makeDrink (drinkType){
        console.log(this.nombre + ' ha elaborado un ' + drinkType)
    }

    serves (item){
        console.log(this.nombre + ' te sirve un ' + item)
    }
}

class Encargado extends Empleado {
    constructor(nombre, centro, employmentNumber){
        super(nombre, centro, employmentNumber)
    }

    signDelivery (){
        console.log('Delivery confirmado por ' + this.nombre)
    }

    cleaningsSupervising(isClean){
        if (isClean) {
            console.error(this.nombre + ' ha comprobado que todo esta limpio en ' + this.centro)
        } else {
            console.error(this.centro + ' necesita ser limpiado.')
        }
    }
}

class Gerente extends Encargado {
    constructor(nombre, centro, employmentNumber){
        super(nombre, centro, employmentNumber)
    }

    createRota (){
        console.log(this.nombre + ' envia un email con el rota.')
    }

    hasMeeting (invitado){
        const persona = invitado.nombre
        console.log(this.nombre + ' tiene una reunion en ' + this.centro + ' con ' + persona)
    }
}

Carlos = new Empleado ('Carlos', 'StPancrass','0022')
Marta = new Encargado ('Marta', 'YorkWay', '1408')
Petra = new Gerente ('Petra', 'YorkWay', '0405')

Carlos.makeDrink('Cappuccino')
Marta.serves('Croissant')
Marta.cleaningsSupervising()
Petra.cleaningsSupervising(true)
Petra.hasMeeting(Carlos)