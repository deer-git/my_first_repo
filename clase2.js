var nombre = 'Eliot', apellido = 'Lifszyc';

//transformar el texto en mayusculas y en minusculas
var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLocaleLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

// concatenar 2 formas
var nombreCompleto = nombre + ' ' + apellido.toUpperCase()
//interpolacion de texto usando comilla invertida ` ` 
//y dentro de las llaves podemos usar codigo js = ${apellido.toUpperCase()}  
var nombreCompleto1 = `${nombre} ${apellido}` 

//acceder a una seccion de un string
var str = nombre.charAt(1) + nombre.charAt(2);
//otra forma de hacerlo es substraer/substring desde posision 1 y abarca 2 lugares desde posision inicial
var str1 = nombre.substr(1,2)

//Reto = muestra al usuario cual es la ultima letra de su nombre