var tempInput = document.getElementById("tempInput");
var radioCelsius = document.getElementById("radioCelsius");
var radioFahrenheit = document.getElementById("radioFahrenheit");
var returnTemp = document.getElementById("returnTemp")
var domstring = "";

function toCelsius (tempInput2) {
	var tempInput = parseInt(tempInput2.value);
	var celsius = (tempInput - 32) / 1.8;
	returnTemp.innerHTML = parseFloat(Math.round(celsius * 100) / 100).toFixed(2);
	celsius > 32 ? returnTemp.style.color = "red"
       : (celsius < 0 ? returnTemp.style.color = "blue"
         : returnTemp.style.color = "green");
}

function toFahrenheit (tempInput2) {
	var tempInput = parseInt(tempInput2.value);
	var fahrenheit = (tempInput * 1.8) + 32;
	returnTemp.innerHTML = parseFloat(Math.round(fahrenheit * 100) / 100).toFixed(2);
	fahrenheit > 90 ? returnTemp.style.color = "red"
       : (fahrenheit < 32 ? returnTemp.style.color = "blue"
         : returnTemp.style.color = "green");
}

function determineConverter () {
	if (radioCelsius.checked) {
		returnTemp = toCelsius(tempInput);
	} else if (radioFahrenheit.checked) {
		returnTemp = toFahrenheit(tempInput);
		domstring += '<h2 id="returnTemp">' + returnTemp + '</h2>';
	} else if (radioCelsius === false && radioFahrenheit === false){
		alert ("Select Celsius or Fahrenheit to convert your temperture.");
	}
	console.log("this is the convert temp function");
}

document.getElementById("determineConverter").addEventListener("click", determineConverter);
