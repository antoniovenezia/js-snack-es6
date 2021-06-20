//Abbiamo sempre un array di squadre, con:
//nome
//punti fatti
//falli subiti
//Stampare in html (in forma tabellare!!! :allegria::allegria:) 
//i dati relativi alle squadre evidenziando in giallo la riga 
//corrispondente alla squadra con più falli subiti.



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

console.log(team);

let tableHTML = document.querySelector(".table");
var lastTeamFalliSubMaggiori;
var lastFalliTeamFalliSubMaggiori;

for (let x = 0; x < team.length; x++) {
    team[x].puntiFatti = numRandom();
    team[x].falliSubiti = numRandom();
    const { nome, puntiFatti, falliSubiti } = team[x];
    //     console.log(nome);

    tableHTML.innerHTML += `
    <ul>
        <li>${nome}</li>
        <li>${puntiFatti}</li>
        <li>${falliSubiti}</li>
    </ul>
    `
}

for (var i = 0; i < team.length; i++) {
    var thisTeam = team[i].falliSubiti;

    if (typeof lastFalliTeamFalliSubMaggiori === 'undefined' || thisTeam > lastFalliTeamFalliSubMaggiori) {
        lastTeamFalliSubMaggiori = team[i];
        lastFalliTeamFalliSubMaggiori = thisTeam;
        document.getElementsByClassName("table")[i].backgroundColor = "yellow";
    }
}


console.log(lastTeamFalliSubMaggiori);





