var number1 = 24;
var number2 = 25.5;
console.log(number1 + number2);

// Convert String to Number
// Parse Integer Type
var numberInt1 = 24;
var numberString1 = "25.5";
numberString1 = parseInt(numberString1);
console.log(numberInt1 + numberString1);

// Parse Float Type
var numberInt2 = 25;
var numberString2 = "25.5";
numberString2 = parseFloat(numberString2);
console.log(numberInt2 + numberString2);

// Contvert Number to String
// Integer to String
var numberString3 = 22;
var numberInt3 = 33;
numberString3 = "" + numberString3;
console.log(numberString3 + numberInt3);

// Float to string
var numberString4 = 23.4;
var numberInt4 = 56;
numberString4 = "" + numberString4;
console.log(numberString4 + numberInt4);

// To Fixed Type
var num1 = 0.3;
var num2 = 0.5;
var total = num1 + num2;
total = total.toFixed(3);
console.log(total);

var num3 = 10.6;
var num4 = 0.55;
var total2 = num3 + num4;
var total2 = total2.toFixed(20);
console.log(total2);
