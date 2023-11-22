
const calAverage = (x,y,z)=>{
          return (x+y+z)/3;
}

function checkWinner(avgDolphins, avgKoalas){
    const scoreDolphins= calAverage(44,23,71);
    const scoreKoalas = calAverage(65,54,49);
    if(scoreDolphins>=2 * scoreKoalas){
       console.log(`Dolphins win (${scoreDolphins} vs ${scoreKoalas})`);
    }else if(scoreKoalas >= 2* scoreDolphins){
        console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`);
    }else{
        console.log('no team wins.........');
    }
}

checkWinner();

// data set two

const _calAverage = (x,y,z)=>{
    return (x+y+z)/3;
}

function _checkWinner(_avgDolphins, _avgKoalas){
const _scoreDolphins= _calAverage(85,54,41);
const _scoreKoalas = _calAverage(23,34,27);
if(_scoreDolphins>=2 * _scoreKoalas){
 console.log(`Dolphins win (${_scoreDolphins} vs ${_scoreKoalas})`);
}else if(_scoreKoalas >= 2* _scoreDolphins){
  console.log(`Koalas win (${_scoreKoalas} vs ${_scoreDolphins})`);
}else{
  console.log('no team wins.........');
}
}

checkWinner();