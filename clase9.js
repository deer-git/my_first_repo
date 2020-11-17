//comparaciones en Java Script

var x = 4, y = '4'
//en consola x==y & x===y

//------------------------------

var sacha = {
    nombre: 'Sacha'
}

var otraPersona = {
    nombre: 'Sacha'
}

var otraPersona1 = {
    ...sacha
}

var nuevaPersona = sacha

//comparando objetos hace referencia a la variable 
//sacha==otraPersona & sacha==otraPersona1 &  sacha===nuevaPersona

//nuevaPersona.nombre = 'pepe'   el nombre de sacha tambien cambia porque apuntan al mismo lugar
//otraPersona1.nombre = 'pepe'   no modifica el nombre de sacha
