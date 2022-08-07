var number1 = 24;
var number2 = 25.5;
console.log(number1 + number2);

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

var num1 = 0.3;
var num2 = 0.5;
var total = num1 + num2;
total = total.toFixed(3);
console.log(total);
