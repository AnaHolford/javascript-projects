let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = food.split(',').sort();
//console.log(cabinet1);

let cabinet2 = equipment.split(',').sort();
//console.log(cabinet2);

let cabinet3 = pets.split(',').sort();
//console.log(cabinet3);

let cabinet4 = sleepAids.split(',').sort();
//console.log(cabinet4);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];
//console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');
let personQuestion = 'Please select a cabinet from 1 - 4 '
let personAnswer = input.question(personQuestion);
let cabinetNumber = [];

if (personAnswer === '1') {
    cabinetNumber = 0
    //console.log(cargoHold[0]);
}
if (personAnswer === '2') {
    cabinetNumber = 1
    //console.log(cargoHold[1]);
}
if (personAnswer === '3') {
    cabinetNumber = 2
    //console.log(cargoHold[2]);
}
if (personAnswer === '4') {
    cabinetNumber = 3
    //console.log(cargoHold[3]);
}

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (personAnswer <= 4 && personAnswer >= 1) {
    console.log(`The cabinet ${personAnswer} contains ${cargoHold[cabinetNumber]}`);
} else {
    console.log(`Error, we don't have this cabinet, try a number between 1-4.`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let personProduct = 'Which product do you want?'
let personAnswer2 = input.question(personProduct)

if (cargoHold[personAnswer-1].includes(personAnswer2)) {
    console.log(`Cabinet ${personAnswer} does contain ${personAnswer2}`)
} else {
    console.log(`Cabinet ${personAnswer} does not contain ${personAnswer2}`);
}