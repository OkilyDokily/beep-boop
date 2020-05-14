function convertToRange(number){
  return new Array(number + 1).fill(undefined).map(function (_,i){
    var filteredArray = i.toString().split("").filter(function (item){
      return /[1-3]/.test(item);
    });
    var largest = Math.max(...filteredArray);
    switch(largest){
      case 3:
        return "I'm sorry, Dave. I'm afraid I can't do that."
      case 2:
        return "Boop!"
      case 1:
        return "Beep!"
      default:
        return i;
    }
  }).join(" ");
}



$(document).ready(function(){
  console.log(convertToRange(20));
})