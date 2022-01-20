console.log('JS OK');
/*
SNACK2

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// FUNZIONE RANDOM
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
console.log(randomNumber(1, 10));

// CREO ARRAY SQUADRE DI CALCIO 
const footTeams = [
    {squadra: 'inter', puntiFatti: 0, falliSubiti: 0},
    {squadra: 'milan', puntiFatti: 0, falliSubiti: 0},
    {squadra: 'juventus', puntiFatti: 0, falliSubiti: 0},
    {squadra: 'sampdoria', puntiFatti: 0, falliSubiti: 0},
    {squadra: 'lazio', puntiFatti: 0, falliSubiti: 0}
];
console.table(footTeams);

// ASSEGNO NUMERI CASUALI AI DUE DATI
for (i = 0; i < footTeams.length; i++) {
    footTeams[i].puntiFatti= randomNumber(1, 10);
    footTeams[i].falliSubiti= randomNumber(1, 10);
};
console.table(footTeams);
