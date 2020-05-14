function convertToRange(number){
  return new Array(number + 1).fill(undefined).map((_,i)=>i);
}

function getLargestValueBetweenOneAndThree(number){
  var filteredArray = number.toString().split("").filter(function (item){
    return /[1-3]/.test(item);
  });
  return Math.max(...filteredArray);
}

$(document).ready(function(){
  console.log(getLargestValueBetweenOneAndThree(1223345));
})