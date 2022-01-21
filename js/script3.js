console.log('JS OK');

/*
SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

const array = [3, 45, 3, 6, 1, 76, 34, 9, 10, 87, 234, 76];
console.table(array);

function selected(array, a, b){
   array.forEach((item, a, b) => {
    const newArray = array.filter((item, a, b) => {
        if (item < a || item > b) {
            return false
        };
        return newArray;
    });
    console.log(newArray);
   });
};