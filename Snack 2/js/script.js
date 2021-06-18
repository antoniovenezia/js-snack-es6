//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà:
//nome,
//punti fatti,
//falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
//solo nomi e falli subiti e stampiamo tutto in console.
//Svilupparlo in ES6.

function numRandom() {
    return Math.floor(Math.random() * 100);
}

console.log(numRandom());


let team = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juve",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
]

var arrayNew = [];

for (let x = 0; x < team.length; x++) {
    team[x].puntiFatti = numRandom();
    team[x].falliSubiti = numRandom();
    const { nome, falliSubiti } = team[x];
    arrayNew[x] = {nome, falliSubiti};
}

console.log(team);

console.log(arrayNew);



