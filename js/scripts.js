//business logic
function convertNumberToBoopSequence(number){
  //create an empty array with defaults then map to create a range
  return new Array(number + 1).fill(undefined).map(function (_,i){
    //for each number in the range split it into an array of digits 
    var arrayOfDigits = i.toString().split("");
    //and then return an array of 
    //just the 1,2,3 digits for that number...
    arrayOfOnesTwosThreesDigits = arrayOfDigits.filter(function (item){
      return /[1-3]/.test(item);
    });
    //find the largest value in that array
    var largest = Math.max(...arrayOfOnesTwosThreesDigits);
    //return the string based on those largest value or if no largest value return the 
    //number in the range (i)
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
  var intervalId;
  $("form").submit(function(e){
    //clear everything from screen
    //and also clear any intervals
    clearResults();
    e.preventDefault();
    
    //get the number
    var number = $("input").val();
    var results = convertNumberToBoopSequence(parseInt(number));

    //begin the interval which displays a portion of the results
    //every half second
    intervalId = setInterval(code, 500); 
    
    //this value is to display the number before it was processed to the user (i++)
    var i = 0;
    //this is the code that is continuously called
    function code(){
      //call image and sounds 
      createImagesAndEffects(results[0]);
      //get the result for the first value in the results array
      $("#results").prepend("<p>" + "<span>" + (i++) + ": " + "</span>"  + results[0]+ "</p>");
      //remove the first value so that the next time the code is called 
      //we are on a new value
      results.shift();
      //end the interval calls when the results array is empty
      if (results.length === 0){
        clearInterval(intervalId);
      }
      //limit the number of results that show on the page to 10
      if($("#results").children().length === 11){
        $("#results p:nth-of-type(11)").remove();
      }
    }
    
    function createImagesAndEffects(image){
      //create image and sounds based on the results
      //for a particular number
      $("img").remove();
      switch (image){
        case "Beep!":
          $("body").css("backgroundColor","aliceblue")
          $("div.image").append("<img src='img/beep.jpg'>");
          $('#beep')[0].play()
          break;
        case "Boop!":
          $("body").css("backgroundColor","aliceblue")
          $("div.image").append("<img src='img/boop.jpg'>");
          $('#boop')[0].play()
          break;
        case "I'm sorry, Dave. I'm afraid I can't do that.":
          $("body").css("backgroundColor","red");     
          break;
        default:
          $("body").css("backgroundColor","aliceblue")
        }
    }
    
    function clearResults(){
      clearInterval(intervalId);
      $("p").remove();
    }    
  })
})
