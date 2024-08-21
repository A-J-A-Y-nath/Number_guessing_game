// declaring attempts left
var attempts = 7;

var random;
//declaring body tag
var body = document.querySelector("body");
var end = document.querySelector("h2");
function newTarget(){
    
    // getting the range of random numbers
    var n1 = document.getElementById("start").value;
    var n2 = document.getElementById("end").value;

    // input box message declaration
    var message =  document.getElementById("message");

    // generating a random number
    random = Math.floor(Math.random()*(n2-n1+1)+n1);
    alert("Random number created")

}


 //declaring function guess to check our number
 function guess(){
    if (attempts > 0){
        attempts=attempts-1;
        // getting number from the input box
        var Num = document.getElementById("guessNumber");
        userNum = Num.value;
        if (userNum > random){
            message.value = "Too high... "+ attempts +" attempts left";
        }
        else if(userNum < random){
            message.value = "Too low... "+ attempts +"attempts left";
        }
        else if(userNum == random){
            message.value = "wow... it's correct "+ attempts +"attempts left";
            body.style.background ="green";


        }
    }
    else{
        end.innerHTML = "Failed... Correct answer is " + random;
        end.style.color = "yellow";
        body.style.background ="red";
    }
 }