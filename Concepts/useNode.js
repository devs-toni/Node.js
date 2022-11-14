
const [ frutas, dinero ] = require('./moduleExports');

/* Comprobación de funcionamiento de Node en consola! */
frutas.forEach((item, index) => {
    console.log(`Objeto número ${index}: ${item}`);
});

/* Eliminación de elementos repetidos */
const nonRepeatFruits = new Set([...frutas]);
nonRepeatFruits.forEach(item => {
    console.log(`${item}`);
}); 

/* Uso de mas de una variable en exports */
console.log(dinero);

/* Uso de dependencias con 'npm i <package>' */
let cowsay = require('cowsay');
console.log(cowsay.say({
    text: "I'm a moooooodule",
    e: "oO",
    T: "U "
}));
