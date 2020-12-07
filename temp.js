/*var celsiusInput = document.querySelector('#celsius > input');
var fahrenheitInput = document.querySelector('#fahrenheit > input');
var kelvinInput = document.querySelector('#kelvin > input');


function roundNum(num){
    return Math.round(num*100)/100;
}


function celToFahrAndKel(){
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * (9/5)) + 32;
    var kelvin = (celsius + 273.15);
    fahrenheitInput.value = roundNum(fahrenheit);
    kelvinInput.value = roundNum(kelvin);
}

function fahrToCelAndKel(){
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * (5/9);
    var kelvin = (fahrenheit - 32) * (5/9) + 273.15;
    celsiusInput.value = roundNum(celsius);
    kelvinInput.value = roundNum(kelvin);
}

function kelToCelAndFahr(){
    var kelvin = parseFloat(kelvinInput.value);
    var celsius = (kelvin - 273.15);
    var fahrenheit = 9/5 (kelvin - 273.15) + 32;
    celsiusInput.value = roundNum(celsius);
    fahrenheitInput.value = roundNum(fahrenheit);
}


function main() {
    celsiusInput.addEventListener('input', celToFahrAndKel);
    fahrenheitInput.addEventListener('input', fahrToCelAndKel);
    kelvinInput.addEventListener('input', kelToCelAndFahr);
}

main();*/


//lucky game 

var guess= function() {
    
   var resp= document.getElementById("wordInput").value;

   var myInput = resp.charAt(2);
   
   var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var randomLetter = alphabet[Math.round(Math.random() * alphabet.length)]

    document.getElementById("thirdLetter").innerHTML= ` Your third letter is ${myInput}` 

    document.getElementById("randomChar").innerHTML= ` The correct Letter is ${randomLetter}` 

   if ((myInput.match(randomLetter))){
       
   document.getElementById("value").innerHTML = "Congratulations, You are a lucky winner !!";
    
}
    else{ document.getElementById("value").innerHTML = "Oops! You are so close, try again!";
 }
 }

 
 
    
    
    
    

   