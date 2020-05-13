function convertToRange(number){
  return new Array(number + 1).fill(undefined).map((_,i)=>i);
}

function convertNumberToString(number){
  return number.toString();
}


$(document).ready(function(){
  convertToRange(5);
  console.log(convertNumberToString(45));
})