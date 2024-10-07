/*
 * EJERCICIO:
 * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
 * atributos y una función que los imprima (teniendo en cuenta las posibilidades
 * de tu lenguaje).
 * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
 * utilizando su función.
 */


class Developer{
    constructor(name, age, languages){
        this.name = name,
        this.age = age,
        this.languages = languages

    }
    print(){
        const objectName = this.name
        const objectAge = this.age
        const objectLanguages = this.languages
        console.log(objectName + '          ' + objectAge + '       ' + objectLanguages)
    }
}

const Programmer1 = new Developer('Cristian', 33, ['HTML','CSS','JavaScript'])

const Programmer2 = new Developer('Marcos', 28, ['Python','PHP','Kotlin'])

/*
* DIFICULTAD EXTRA (opcional):
* Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
* en el ejercicio número 7 de la ruta de estudio)
* - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
*   retornar el número de elementos e imprimir todo su contenido.
*/

class Pila {

    constructor(lista){
        this.lista = lista
    }

    add(numberAdded){
        this.lista.push(numberAdded)
        //Validar el valor de lista
        console.log(this.lista)
    }

    extract(numberExtracted){
        if (numberExtracted==undefined){
            this.lista.pop()
        } else if (this.lista.includes(numberExtracted)==false){
            console.warn(numberExtracted + ' no se encuentra en tu Pila.')
        } else {
            this.lista.splice(this.lista.indexOf(numberExtracted),1)
        }
        //Validar el valor de lista
        console.log(this.lista)
    }

    payment(){
        this.lista = []
        console.log(this.lista)
        console.log('Pago realizado correctamente')
    }
}
/*
const Carrito = new Pila ([])
Carrito.add('zanahoria')
Carrito.add('pepino')
Carrito.add('galletas')
Carrito.extract('cereales')
Carrito.payment()
 */



class Cola {

    constructor(lista){
        this.lista = lista
    }

    add(numberAdded){
        this.lista.push(numberAdded)
        //Validar el valor de lista
        console.log(this.lista)
    }

    extract(numberExtracted){
        if (numberExtracted==undefined){
            this.lista.shift()
        } else if (this.lista.includes(numberExtracted)==false){
            console.warn(numberExtracted + ' no se encuentra en tu Cola.')
        } else {
            this.lista.splice(this.lista.indexOf(numberExtracted),1)
        }
        //Validar el valor de lista
        console.log(this.lista)
    }

}

ToDoList = new Cola(['viajar a Vietnam','Ver el Taj Mahal', 'Hacer puenting', 'Conseguir un mejor trabajo'])
ToDoList.add('Celebrar mi cumple en las Vegas')
ToDoList.extract()
ToDoList.extract('Hacer puenting')