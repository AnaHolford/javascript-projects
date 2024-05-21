const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStringCut = str.slice(0,3);
console.log(str.slice(3) + newStringCut);

//Use a template literal to print the original and modified string in a descriptive phrase.
let newStringFull = (str.slice(3) + newStringCut);
//console.log(`The old string was ${str} and the new string is ${newStringFull}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let info = input.question('How many letters will be relocated?');
let newOtherStringSlice = (str.slice(0,info-1));
let newOtherStringFull = (str.slice(info-1) + newOtherStringSlice)
//console.log(`The old string was ${str} and the new string is ${newOtherStringFull}`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

 if (info <= str.length) {
    console.log(`The old string was ${str} and the new string is ${newOtherStringFull}`);
 } else {
     console.log(`Sorry but this length doesn't exist, this is your new string ${newStringFull}`);
 }