//requires
/*File System: es para poder grabar en un archivo
de texto mi tabla de multiplicar. Para utilizarlo
se recomienda utilizar una constante const con el
nombre fs (no es obligatorio, puede ser cualquier nombre)
pero si es necesario poner la palabra require('fs').
Se acostumbra poner los require siempre al inicio.
Hay 3 tipos de require. */

const fs = require('fs');
/* Este corresponde a un 
proyecto propio de node, es decir que esa libreria
ya existe en node y simplemente la definimos. */

/*
const fs = require('express'); Este es un paquete
que se instala, es otro tipo, son los paquetes que no 
son nativos de node. Son expansiones o codigos que 
otras personas hicieron por nosotros. 

const fs = require('./'); Por ultimo, tenemos los
requires de archivos que nosotros creamos en el
proyecto, se identifican con un ./ o un ../ y ahi viene
el path de donde se encuentra el archivo en nuestro proyecto.
*/

let base = 9;
let data = '';

// let suma;

for (i = 1; i <= 10; i++) {
    // suma = base * i;
    // console.log(suma);
    data += `${ base } * ${ i } = ${ base * i }\n`;
}

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    /* 
       El primer parametro es el nombre del archivo
       El segundo es el contenido que yo quiero grabar,
       por ejemplo Hola Mundo.
       Por ultimo tenemos un callback, en el callback
       vamos a recibir un error, si existe un error, entonces
       mostramos el error, sino, muestra 'El archivo ha sido creado.' */
    /* Para que el nombre del archivo tenga el nombre de
    la base que estamos poniendo pongo temples literales `tabla-${ base }.txt` */
    if (err) throw err;

    console.log(`El archivo tabla-${ base }.txt ha sido creado!`);
    /* Aqui lo mismo, el archivo tabla-${ base }.txt... con temple literal */
});

/* Al guardarlo asi, se creo el archivo tabla-2 con el mensaje Hola Mundo.
Pero yo quiero grabar mi tabla de multiplicar.
Para eso puedo poner una instruccion let data = ''; 
y usar esa variable cambiando el console.log del for por data += 
con un salto de linea. y luego 
en vez de hola mundo, voy a mandar la data que quiero grabar.
Lo refresco en el nodemon*/

/* Para hacer que los archivos sean creados dentro de tablas, simplemente debo especificar el path con tablas/ */