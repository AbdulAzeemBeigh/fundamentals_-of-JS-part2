const calAge2 = function (birthyear){
    const now = 2040;
    return now - birthyear;
}

const age2 = calAge2(1998);
console.log(age2);


// Arrow functions

const calAge3 = birthyear =>  2040 - birthyear;

console.log(calAge3(1995));


const retirement = birthyear =>{
    const age = 2040 - birthyear;
    const retirement = 60 - age;
    return retirement;
}

console.log(retirement(1995));

const calAge4 = (birthyear, firstName) =>{
    const age = 2040 - birthyear;
    return  `${firstName} has an age of ${age} years`;
}

console.log(calAge4(1995,'Abdul'));