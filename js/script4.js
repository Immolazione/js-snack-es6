console.log('JS OK');

/*
SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

// ARRAY DI STUDENTI
const studenti = [
    {nome: 'giulia', id: '100', voto: '50'},
    {nome: 'enrico', id: '200', voto: '80'},
    {nome: 'federico', id: '150', voto: '60'},
    {nome: 'marco', id: '70', voto: '75'},
    {nome: 'matteo', id: '20', voto: '100'},
    {nome: 'marco', id: '105', voto: '40'},
    {nome: 'ignazio', id: '80', voto: '95'},
    {nome: 'giulio', id: '120', voto: '25'},
    {nome: 'bernardo', id: '10', voto: '55'}
];

console.table(studenti);

// PRIMA LETTERA MAIUSCOLA, RESTO MINUSCOLO
const targhe = studenti.map(({nome}) => {
    let firstLetter = nome.charAt(0).toUpperCase();
    let otherLetters = nome.substring(1).toLowerCase();
    return firstLetter + otherLetters;
});

console.table(targhe);