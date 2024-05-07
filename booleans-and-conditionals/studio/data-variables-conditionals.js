// Initialize Variables below
let date = ('Monday 2019-03-18')
let time = ('10:05:34 AM')
let astronautCount = (7)
let astronautStatus	= ('ready')
let averageAstronautMassKg	= (80.7)
let crewMassKg	= (astronautCount * averageAstronautMassKg)
let fuelMassKg	= (760000) 
let shuttleMassKg = (74842.31)
let totalMassKg	= (crewMassKg + fuelMassKg + shuttleMassKg)
let maximumMassLimit = (850000)
let fuelTempCelsius	= (-225)
let minimumFuelTemp	= (-300)
let maximumFuelTemp	= (-150)
let fuelLevel = (100)
let weatherStatus = ('clear')
let preparedForLiftOff = (true)

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log('Shuttle ready to launch');
} else {
    console.log('Do not launch shuttle'); 
}    
// add logic below to verify all astronauts are ready
 if (astronautStatus === 'ready') {
    console.log('Astronauts ready');
 } else {
    console.log('Astronauts not ready');
 }
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000) {
    console.log('total mass ok');
} else {
    console.log('total mass exceed maximum limit');
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= -150 && fuelTempCelsius >= -300) {
    console.log('Fuel temperature appropriate');
} else {      
    console.log('Fuel temperature not appropriate');
} 

// add logic below to verify the fuel level is at 100%
if ('fuelLevel === 100') {
    console.log('fuel level ready');
} else {
    console.log('fuel not ready');
}

// add logic below to verify the weather status is clear
if ('weatherStatus === clear') {
    console.log('weather clear');
} else {
    console.log('weather not clear');
}
console.log('---------------------------------------------------------------');

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff === true) {
    console.log('All systems are a go! Initiating space shuttle launch sequence!');
    console.log('----------------------------------------------------------------');
    console.log('date: ' + date);
    console.log('time: ' + time);
    console.log('Astronaut Count: ' + astronautCount);
    console.log('Crew Mass: ' + crewMassKg + ' Kg');
    console.log('Fuel Mass: ' + fuelMassKg + ' Kg');
    console.log('Shuttle Mass: ' + shuttleMassKg + ' Kg');
    console.log('Total Mass: ' + totalMassKg + ' Kg');
    console.log('Fuel Temperature: ' + fuelTempCelsius + ' ºC');
    console.log('Weather Status: ' + weatherStatus);
    console.log('----------------------------------------------------------------');
    console.log('Have a safe trip astronauts!');
} else {
    console.log('Launch canceled')
}