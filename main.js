// Generate random number right screen 
document.getElementById("generatePin").addEventListener("click",function(){
    var number =getRandomInt(1000,9999)
    console.log(number);
     document.getElementById("screen").value = number
})

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// add event on the right side button and make it to the screen avaiable
