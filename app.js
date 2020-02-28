const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`.blue))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}


/* const { } = destructuración */

// let base = '1';
/* La ventaja de usar la función
!Number es que si pongo un numero entre '' es valido */

// console.log(process.argv);

// let argv2 = process.argv;

// console.log('limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]





//process es una variable de entorno que se ejecuta sin declaralo previamente.