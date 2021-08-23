function getMinMax(str) {
let splits = str.split(' ');
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

for (let i = 0; i < splits.length; i++) {
    if ((splits[i] / "1" ) == true){
       console.log( splits[i] );
    }
   
  }
let result1 = splits.map(results => results / "1" );
let result2 = result1.filter(results => isNaN(results)== false);

sortArr = result2.sort(compareNumeric);
console.log(sortArr);

let result = {
    min: 0,
    max: 0,
}
let minReslt = sortArr.shift();
let maxReslt = sortArr.pop();
result.min = minReslt;
result.max = maxReslt;
return result; 
}
