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

function filterTheArrayOfChars(number){
  var arrayOfChars = convertStringToArrayOfChars(number);
  return arrayOfChars.filter(function(item){
    return /[1-3]/.test(item);
  })
}


$(document).ready(function(){
  console.log(filterTheArrayOfChars(1223345));
})