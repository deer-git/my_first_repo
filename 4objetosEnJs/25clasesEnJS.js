// Clase 25 clases en java script Heredando prototipos usando clases
// ------------(``)-------------

//#1
//la funcion persona, saludar(), y soyAlto() la transcribimos ahora usando class
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    //ya no es necesario la palabra function
    saludar(){
        console.log(`Hi, my name is ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

//eta funcion trabaja como un constructor
function Persona1(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
Persona1.prototype.saludar = function (){
    console.log(`Hi, my name is ${this.nombre} ${this.apellido}`)
}
Persona1.prototype.soyAlto = function (){
    return this.altura > 1.8
}

//#2
//para lograr que Desarrollador herede de Persona usaremos class extends de padre
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
        //para evitar el error usamos super antes de this, despues ya lo podremos usar
        //this.nombre = nombre
        //this.apellido = apellido
        //this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}

//para que Desarrollador pueda llamar la funcion soyAlto agregar altura
function Desarrollador1 (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

Desarrollador1.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

/* 
var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.85)
 */
