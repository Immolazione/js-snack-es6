console.log('JS OK');
/*
SNACK1

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal.
*/

// ARRAY DI BICI
const bicycles = [
    {nome: 'bici1', peso: 50}, 
    {nome: 'bici2', peso: 30}, 
    {nome: 'bici3', peso: 50}, 
    {nome: 'bici4', peso: 5}, 
    {nome: 'bici5', peso: 80}, 
    {nome: 'bici6', peso: 40}
];
console.table(bicycles);

// // IMPOSTO IL VALORE INIZIALE COME VALORE MINIMO
// let actualWeight = bicycles[0].peso;

// // CICLO L'ARRAY
// for (i = 0; i < bicycles.length; i++){

//     let peso = bicycles[i].peso;

//     // METTO A CONFRONTO
//     if (peso < actualWeight) {
//         actualWeight = peso;
//     }

// };

// console.log(actualWeight);

// SOLUZIONE ALTERNATIVA TENENDO CONTO DELL'INDICE
let minorPeso = 0;

for (i = 0; i < bicycles.length - 1; i++) {

    if (bicycles[i].peso < bicycles[minorPeso].peso) {
        minorPeso = i;
    }

};

console.log(bicycles[minorPeso].peso);