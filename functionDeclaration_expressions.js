'use strict'
// function declaration
function calAge(birthYear){
      const  now =  2040;
       return now- birthYear;
}

const age = calAge(1995);
console.log(age);


//  function expression

const calAge2 = function (birthyear){
     const now = 2040;
     return now - birthyear;
}

const age2 = calAge2(1998);
console.log(age2);

// function declaraton "call before declaration"

names ();
names();
function names(){
    console.log("Name is Abdul Azeem");
}

//  function expression "call before declaration"
const x =_names()
console.log(x);
const _names = function (){
    console.log("Name is Abdul");
}
const y = _names();
console.log("This is second call",y);