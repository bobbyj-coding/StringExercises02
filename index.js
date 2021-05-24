let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

let digits = 1001;
let digital = `${digits}`;           //This template literal allows for the automatic insertion of the variable, digits, into a string.

console.log(typeof (digits));	//	Returns number

console.log(typeof (digital));	//	Returns string

console.log(digital.length);	//	Returns 4

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

digits = 1001;
digital = `${digits}`;
let decimal = 123.45;
let flodec = `${decimal}`;

console.log(typeof (digits));

console.log(typeof [digits.toString()]);

console.log(typeof (digital));

console.log(digital.length);

console.log(decimal.toString());

console.log(typeof (decimal));

console.log(flodec.length);


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let numberlen = `${num}`;

console.log(numberlen.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = 123.45
decimal = `${num2}`;

console.log([decimal.length] - 1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
let testnum = 1001.564;
let numlen = `${testnum}`;

if (numlen.includes(".")) {
  let floater = `${numlen}`;
  console.log([floater.length] - 1);
} else {
  let wholenum = `${numlen}`;
  console.log(wholenum.length);
}