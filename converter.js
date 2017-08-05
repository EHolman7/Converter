var tempInput = document.getElementById("tempInput");
var radioCelsius = document.getElementById("radioCelsius");
var radioFahrenheit = document.getElementById("radioFahrenheit");

function toCelsius (tempInput) {
	var celsius = (tempInput - 32) / 1.8;
	returnTemp.innerHTML = celsius;
}

function toFahrenheit () {
	var fahrenheit = (tempInput * 1.8) / 32;
	returnTemp.innerHTML = fahrenheit;
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