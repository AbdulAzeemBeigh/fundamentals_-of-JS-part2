const friend1 ="Abdul";
const friend2 = "Azeem";
const friend3 = "Jon";

// array storing variables
const friends = [friend1,friend2,friend3];
console.log(friends);

// array storing strings

const x =["Abdul",'Azeem',"Beigh"];
console.log(x);

//  array declaration and number array

const theNumbers = new Array(1991,1992,1993,1994,1995);
console.log(theNumbers);

// array operations

console.log(theNumbers[0]);
console.log(theNumbers[3]);
console.log(theNumbers[theNumbers.length-1]);    //for last element

theNumbers[4] = 4;
console.log(theNumbers);

const _firstName = "Abdul";
const Azeem = [_firstName,"Azeem",2040-1995,'engineer',theNumbers];
// array contains variable, strings , numbers and another array
console.log(Azeem.length);
console.log(Azeem);

// exercise

const calAge = function(birthyear){
    return 2023 - birthyear;
}
const years = [1991,1992,1993,1994,1995];

console.log(calAge(years[0]),calAge(years[1]),calAge(years[2]),calAge(years[3]),calAge(years[years.length-1]));