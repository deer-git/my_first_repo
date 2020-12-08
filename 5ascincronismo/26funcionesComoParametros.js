// Clase 26 Funciones como parametros
// ------------(``)-------------

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
//#2        fn es el nombre de una posible funcion que llegue como parametro o no
    saludar(fn){
        console.log(`Hi, my name is ${this.nombre} ${this.apellido}`)
        if (fn){                          //fn actua como true, si fn existe entonces
            fn(this.nombre, this.apellido)   //mandamos llamar a la funcion fn()
        }                                 //podemos omitir false (nombre, apellido, false)
    }                                     //que representa el parametro esDEv de la funcion responderSaludo

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
//#3
    saludar(fn) {
        /*   estas dos sentencias equivalen a la de abajo prolijamente
        var nombre = this.nombre
        var apellido = this.apellido */
        var { nombre, apellido } = this         //nombre y apellido lo obtiene de this
        
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if (fn) {
            fn(nombre, apellido, true)   //podemos usar true u otro valos que devuelva true (1,{objeto},"string")
        }
    }
}

//#1
function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev) {
        console.log(`Ah mirá, ${nombre} entra con privilegios`)
    }
}

//#4
var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var adriana = new Persona('Adriana', 'Luna', 1.70)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.85)

//#5    pasamos la funcion como parametro
sacha.saludar()
adriana.saludar(responderSaludo)
arturo.saludar(responderSaludo)

