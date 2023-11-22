
const calAge = function(birthyear){
    return 2030 - birthyear;
}

const yearsRetirement = function (birthyear, firstName){
    const age = calAge(birthyear);
    const retirement = 60 - age;

    if(retirement > 0){
        console.log(`${firstName} has ${retirement} year's to retire`);
           return retirement;
    }else{
        console.log(`${firstName} has already retired`);
       return -1;
      }
}
console.log(yearsRetirement(1994,'Abdul'));
console.log(yearsRetirement(1950,'jones'));