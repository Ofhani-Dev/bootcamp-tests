/* write a function named allFromTown which takes a parameters with registration numbers */
function allFromTown(regNumbers, loc){
    /* Separate the string using a comma */
      var regNumbers_Array= regNumbers.split(",");
      //console.log(regNumbers_Array);
    var allFromTown_regNumbers = [];
    /* Create a for loop function to set the conddition */ 
        for ( var i = 0; i <regNumbers_Array.length; i++){
    /* Use the trim function to remove any spaces in the array, by creating new variable*/
          var numPlates = regNumbers_Array[i].trim();
          if (numPlates.startsWith(loc)){
          //console.log(numPlates)
          allFromTown_regNumbers.push(numPlates);
          }
        }
    /* The function must return all registration numbers */	
          return allFromTown_regNumbers;
    }
    