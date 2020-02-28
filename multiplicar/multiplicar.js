//require
const fs = require('fs');

const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${ base }" no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`)

        });
    });
}

/* Aca lo que hice fue copiar todo el codigo anterior dentro de la 
estructura de la promesa, y modificarlo dentro para que funcione como
promesa con resolve y reject. */

module.exports = {
    crearArchivo,
    listarTabla
}