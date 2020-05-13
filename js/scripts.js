function convertToRange(number){
  return new Array(number + 1).fill(undefined).map((_,i)=>i);
}

function convertNumberToString(number){
  return number.toString();
}

function convertStringToArrayOfChars(number){
  var string = convertNumberToString(number)
  return string.split("");
}


$(document).ready(function(){
  console.log(convertStringToArrayOfChars(54));
})