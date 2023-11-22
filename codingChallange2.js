const bills = [125,555,44];
const calcTip =function (value){
    if(value>=50 && value<=300){
        return value * 0.15;
    }else{
        return value * 0.20;
        
    }
}

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[bills.length-1])];
console.log(tips);
const totals = [tips[0]+ bills[0],tips[1]+ bills[1],tips[2]+ bills[2]];
console.log(totals);