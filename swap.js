// Method 1
var a = 7;
var b = 2;
console.log("Before swap a=", a, "b=", b);

var temp = a;
a = b;
b = temp;

console.log("After swap a=", a, "b=", b);

// Method 2
var x = 5;
var y = 4;

console.log("Before swap x=", x, "y=", y);

x = x + y;
y = x - y;
x = x - y;

console.log("After swap x=", x, "y=", y);

// Method 3
var p = 3;
var q = 8;

console.log("Before swap p=", p, "q=", q);

[p, q] = [q, p];

console.log("After swap p=", p, "q=", q);
