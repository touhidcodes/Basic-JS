//var decleare
var nameOfFriends = ["Sakib", "Jisan", "Mithun", "Rabbi", "Mamun", "Rohomot"];
console.log(nameOfFriends);

//add element in last
var add = nameOfFriends.push("Sassoto");
add = nameOfFriends.push("Rakib");
console.log(nameOfFriends);

//removes element from last
var remove = nameOfFriends.pop();
console.log(nameOfFriends);

//add element in first
add = nameOfFriends.unshift("Kiran");
add = nameOfFriends.unshift("Mohim");
console.log(nameOfFriends);

//removes element in first
remove = nameOfFriends.shift();
console.log(nameOfFriends);

//slice element
var slice = nameOfFriends.slice(4, 6);
console.log(slice);

//index of
console.log(nameOfFriends.indexOf("Rabbi"));
