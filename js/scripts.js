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

function findMaximumValueInFilteredArray(number){
  var filteredArray = filterTheArrayOfChars(number);
  console.log(filteredArray)
  return Math.max(...filteredArray)
}

$(document).ready(function(){
  console.log(findMaximumValueInFilteredArray(1223345));
})