const names = ["John","jonas","paul"];
// adding elements
names.push("roy");   
console.log(names);  // adds last element

names.unshift("Abdul");
console.log(names); //adds first element

// remove elements
const x = names.pop(); //removes last element
console.log(x);
console.log(names);

names.shift(); // removes first element
console.log(names);

names.push(23);
console.log(names.indexOf("paul"));
console.log(names.indexOf("Abdul"));
console.log(names);
console.log(names.includes(23));

console.log(names.includes("bob"));