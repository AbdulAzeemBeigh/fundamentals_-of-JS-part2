'use strict'
function names(){
    let x =prompt("enter your name");
    console.log(x);
}

// calling / running / invoking function

names();
names();

function  fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const juices = fruitProcessor(5, 0);
console.log(juices);

console.log(fruitProcessor(2,5));