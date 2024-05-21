let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check = strings [0]

	//TODO: 2. write the code required for this step
if (check.includes(',')) {
	let output = check.split(',');
	output.reverse();
	return output.join(',');


}

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return check;
}
//console.log(reverseCommas())

//3)
function semiDash() {
	let check1 = strings [1]

//TODO: write the code required for this step
if (check1.includes(';')){
	let output1 = check1.split(';');
	output1.sort();
	return output1.join('-');


}
  
	return check1;
}

//console.log(semiDash())

//4)
function reverseSpaces() {
	let check2 = strings [2] ;
	
  //TODO: write the code required for this step
if (check2.includes(' ')); {
	let output2 = check2.split(' ');
	output2.sort().reverse();
	return output2.join(' ');

}

	return check2;
}

console.log(reverseSpaces());

//5)
function commaSpace() {
	let check3 = strings [3];
	
	//TODO: write the code required for this step
  if (check3.includes(', ')); {
	let output3 = check3.split(', ');
	output3.reverse();
	return output3.join(',');
  }

	return output3;
}
console.log(commaSpace());

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
