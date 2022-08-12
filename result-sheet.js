var result = 67;

if (result >= 80) {
  console.log("A+");
  console.log("CGPA= 4.00");
} else if (result >= 75 && result < 80) {
  console.log("A");
  console.log("CGPA= 3.75");
} else if (result >= 70 && result < 75) {
  console.log("A-");
  console.log("CGPA= 3.50");
} else if (result >= 65 && result < 70) {
  console.log("B+");
  console.log("CGPA= 3.25");
} else if (esult >= 60 && result < 65) {
  console.log("B");
  console.log("CGPA= 3.00");
} else if (result >= 55 && result < 60) {
  console.log("B-");
  console.log("CGPA= 2.75");
} else if (result >= 50 && result < 55) {
  console.log("C+");
  console.log("CGPA= 2.50");
} else if (result >= 45 && result < 50) {
  console.log("C");
  console.log("CGPA= 2.25");
} else if (result >= 40 && result < 45) {
  console.log("D");
  console.log("CGPA= 2.00");
} else {
  console.log("Fail");
  console.log("CGPA= 0.00");
}
