//Abbiamo sempre un array di squadre, con:
//nome
//punti fatti
//falli subiti
//Stampare in html (in forma tabellare!!! :allegria::allegria:) 
//i dati relativi alle squadre evidenziando in giallo la riga 
//corrispondente alla squadra con più falli subiti.


let team = [
    {
        nome: "Inter",
        puntiFatti: 10,
        falliSubiti: 3
    },
    {
        nome: "Juve",
        puntiFatti: 34,
        falliSubiti: 2
    },
    {
        nome: "Milan",
        puntiFatti: 1,
        falliSubiti: 15
    },
    {
        nome: "Lazio",
        puntiFatti: 9,
        falliSubiti: 1
    },
]

console.log(team.nome);

const tableHTML = document.querySelector(".table");
let lastFalliTeamFalliSubMaggiori = 0;
let lastTeamFalliSubMaggiori;

for (let x = 0; x < team.length; x++) {
    var thisTeam = team[x].falliSubiti;

    if (typeof lastFalliTeamFalliSubMaggiori === 'undefined' || thisTeam > lastFalliTeamFalliSubMaggiori) {
        lastFalliTeamFalliSubMaggiori = thisTeam;
        lastTeamFalliSubMaggiori = team[x];
        
    }
}

console.log(lastTeamFalliSubMaggiori);

for (let x = 0; x < team.length; x++) {

    const { nome, puntiFatti, falliSubiti } = team[x];
    //     console.log(nome);

    let customClass = "";

    if (team[x] === lastTeamFalliSubMaggiori) {
        customClass = "falli-subiti";
    }

    tableHTML.innerHTML += `
    <ul class="${customClass}">
        <li>${nome}</li>
        <li>${puntiFatti}</li>
        <li>${falliSubiti}</li>
    </ul>
    `
}


console.log(lastTeamFalliSubMaggiori);





