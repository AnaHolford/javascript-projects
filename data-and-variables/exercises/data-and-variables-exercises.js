// Declare and assign the variables below

let spaceShuttleName = 'Determination'; 
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof spaceShuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKm)

// Calculate a space mission below

let milesToMars = distanceToMarsKm * milesPerKm 
let hoursToGetToMars = milesToMars / shuttleSpeedMph
let daysToMars = hoursToGetToMars / 24

// Print the results of the space mission calculations below

console.log(spaceShuttleName +" will take " + daysToMars + " days to reach Mars.")

// Calculate a trip to the moon below

let milesToTheMoon = distanceToMoonKm * milesPerKm 
let hoursToGetToTheMoon = milesToTheMoon / shuttleSpeedMph
let daysToTheMoon = hoursToGetToTheMoon / 24

// Print the results of the trip to the moon below

console.log(spaceShuttleName +" will take " + daysToTheMoon + " days to reach the Moon.")