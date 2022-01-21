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
    {nome: 'Giulia', id: '100', voto: '50'},
    {nome: 'Enrico', id: '200', voto: '80'},
    {nome: 'Federico', id: '150', voto: '60'},
    {nome: 'Marco', id: '70', voto: '75'},
    {nome: 'Matteo', id: '20', voto: '100'},
    {nome: 'Marco', id: '105', voto: '40'},
    {nome: 'Ignazio', id: '80', voto: '95'},
    {nome: 'Giulio', id: '120', voto: '25'},
    {nome: 'Bernardo', id: '10', voto: '55'}
];

console.table(studenti);

