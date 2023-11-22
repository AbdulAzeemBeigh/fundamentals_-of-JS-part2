
function mixer(fruit){
    return fruit * 3
}


function mixedJuice(apples , oranges){

    const applePices = mixer(apples);
    const orangePices = mixer (oranges);
    const juice = `Juice with ${applePices} apple and ${orangePices} orange`;
    return juice;
}

console.log(mixedJuice(2,3));