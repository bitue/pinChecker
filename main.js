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
var digitAll = "";

  document.getElementById("actionEvent").addEventListener("click",function(){
    const number = event.target.innerText;
    
    digitAll=digitAll+number
    console.log(digitAll)
    document.getElementById("screenRight").value=digitAll

   
  })

  document.getElementById("submit").addEventListener("click",function(){
  
    let num =document.getElementById("screenRight").value
    let num2=document.getElementById("screen").value
    
    if(num===num2){
      document.getElementById("green").style.display="block"
    }
    else{
      document.getElementById("red").style.display="block"
    }
    

  })

  
  
 



  

