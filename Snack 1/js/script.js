//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
//nome e peso. Stampare a schermo la bici con peso minore utilizzando 
//destructuring e template literal. Risolvetelo prima in versione ES5, 
//poi commentate la versione in ES5 e fatelo in ES6. (modificato) 


// JS 5

/*
var bikeArray = [
    {
        name: "Bianchi",
        weight: 15
    },
    {
        name: "Bottecchia",
        weight: 50
    },
    {
        name: "General",
        weight: 22
    },
    {
        name: "Montessori",
        weight: 8
    }
];

var lastBikeMinorWeight;
var lastWeightBikeMinorWeight;


for (var x = 0; x < bikeArray.length; x++) {
    var thisBike = bikeArray[x].weight;

    if (typeof lastWeightBikeMinorWeight === 'undefined' || thisBike < lastWeightBikeMinorWeight) {
        lastBikeMinorWeight = bikeArray[x];
        lastWeightBikeMinorWeight = thisBike;   
    }
}

console.log(lastBikeMinorWeight);

*/

//ES6

const bikeArray = [
    {
        name: "Bianchi",
        weight: 15
    },
    {
        name: "Bottecchia",
        weight: 50
    },
    {
        name: "General",
        weight: 22
    },
    {
        name: "Montessori",
        weight: 8
    }
];

let lastBikeMinorWeight;
let lastWeightBikeMinorWeight;


for (let x = 0; x < bikeArray.length; x++) {
    
    const { weight } = bikeArray[x];
    if (typeof weight === 'undefined' || weight < lastWeightBikeMinorWeight) {
        lastBikeMinorWeight = bikeArray[x];
        lastWeightBikeMinorWeight = weight;   
    }
}

const { name, weight } = lastBikeMinorWeight;

// console.log(`Lo studente più anziano è ${name} ${weight}`);