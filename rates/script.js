
var theObjs = {
	button: document.getElementById('rate'),
	label: document.getElementById('lblAnswer'),
	rates: [2.3, 2.2, 2.0, 2.1, 2.4]
}

theObjs.button.addEventListener('click', function(){
	theObjs.rates.sort();
	lblAnswer.innerHTML = "The lowest rate is " + (parseFloat(theObjs.rates[0]).toFixed(2) + "%");
});