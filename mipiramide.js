/* Aca voy a hacer una piramide de '*' */

const fs = require('fs');

let data = '';
let n = 20;

for (i = 1; i <= n; i++) {

    for (j = 1; j <= n - i; j++)
        data += (' ');
    for (j = 1; j <= 2 * i; j++)
        data += ('*');
    data += ('\n');

}

fs.writeFile('piramide/piramide.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});