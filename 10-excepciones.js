/*
 * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error.
 

try{
    for (let i=5; i >  -5; i-- ){
        if( i == 0){
            throw new Error('Es matematicamente imposible dividir por 0.')
        }
        console.log(1/i) //JavaScript sabe como manejar la division por cero ya que devuelve 'infinite'.
    }
} catch (divide0Error){
    console.error(divide0Error.message)
}
    */


/*
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado.
 */

const counterList = [1,2,3,4]

function procces_params (parameters){
    if ( parameters.length<=4){
        throw new Error ('Tu lista debe ser de al menos 4 valores.')
    } else{
        console.log(parameters[4]) //Javascript cuando accedes a un indice vacio retorna undefined.
        console.log('Programa ejecutado con exito')
    }
}

try{
    procces_params (counterList)
} catch (listLengthError) {
    console.error(listLengthError.message)
} finally {
    console.log('La ejecucion se ha terminado.')
}

