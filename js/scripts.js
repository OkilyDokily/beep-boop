function convertNumberToBoopSequence(number){
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
  });
}


$(document).ready(function(){
 $("form").submit(function(e){
   e.preventDefault();
   var intervalId;
   var input = $("input").val();
   var results = convertNumberToBoopSequence(parseInt(input));
   
   var i = 0;

   function displayImage(image){
    $("img").remove();
    switch (image){
      case "Beep!":
      $("div.image").append("<img src='img/beep.jpg'>");
    }
   }


   function code(){
    displayImage(results[0]);
    $("#results").prepend("<p>" + "<span>" + (i++) + ": " + "</span>"  + results[0]+ "</p>");
    results.shift();
    if (results.length === 0){
      clearInterval(intervalId);
    }
    if($("#results").children().length === 11){
      $("#results p:nth-of-type(10)").remove();
    }
  }
  intervalId = setInterval(code,500);
  
   
   
 })
})