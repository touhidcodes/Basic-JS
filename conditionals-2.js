var passedInExam = true;
var cgpa = 1;
if (passedInExam == true && cgpa > 3.5) {
  console.log("You are in top");
} else if (passedInExam == true && cgpa > 2 && cgpa < 3.5) {
  console.log("You are backbencher");
} else {
  console.log("You are Fakibaz");
}
