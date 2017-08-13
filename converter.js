//Temp conversion arrays
var tempInput = document.getElementById("tempInput");
var radioCelsius = document.getElementById("radioCelsius");
var radioFahrenheit = document.getElementById("radioFahrenheit");
var returnTemp = document.getElementById("returnTemp")
var domstring = "";
// Function to figure Celius Convertion
//parseInt to convert input string of toCelsius function to an actual number or integer
//returnTemp to be writen in HTML with parseFloat to convert to number with a decimal pooint and Math.round is rounding the formula of celsius toFixed to keep at 2 decimal places, similar to asking for a price
//when celsius array is great than 32 then return Temp color style will be displayed in red
//when celsius variable is less than 0 the temp color will be blue
// return temp is green if not red or blue
function toCelsius (tempInput) {
	var tempInput = parseInt(tempInput.value);
	var celsius = (tempInput - 32) / 1.8;
	returnTemp.innerHTML = parseFloat(Math.round(celsius * 100) / 100).toFixed(2);
	celsius > 32 ? returnTemp.style.color = "red"
       : (celsius < 0 ? returnTemp.style.color = "blue"
         : returnTemp.style.color = "green");
}
// Function for fahrenheit, similar to toCelsius
function toFahrenheit (tempInput) {
	var tempInput = parseInt(tempInput.value);
	var fahrenheit = (tempInput * 1.8) + 32;
	returnTemp.innerHTML = parseFloat(Math.round(fahrenheit * 100) / 100).toFixed(2);
	fahrenheit > 90 ? returnTemp.style.color = "red"
       : (fahrenheit < 32 ? returnTemp.style.color = "blue"
         : returnTemp.style.color = "green");
}
// function for radio buttons if celsius is checked then figure from fahrenheit to celsius or if fahrenheit is checked then convert from celsius to fahrenehit 
function determineConverter () {
	if (radioCelsius.checked) {
		returnTemp = toCelsius(tempInput);
	} else if (radioFahrenheit.checked) {
		returnTemp = toFahrenheit(tempInput);
		domstring += '<h2 id="returnTemp">' + returnTemp + '</h2>';
}    else if (radioCelsius.checked === false && radioFahrenheit.checked === false){ // if no radio is selected
        alert("Select Celsius or Fahrenheit to convert your temperature."); // display alert string
    }
	console.log("this is the convert temp function");
}

document.getElementById("determineConverter").addEventListener("click", determineConverter);

//   To convert temp when the Enter key is pressed
document.getElementById("determineConverter").addEventListener("keypress", enterPressed);
function enterPressed(k) {
    if (k.key === "Enter")
        returnTemp();
}

