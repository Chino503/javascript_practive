
var obj = {
	btnGenNums: document.querySelector("#btnGenNums"),
	btnHigh: document.querySelector("#btnHigh"),
	btnLow: document.querySelector("#btnLow"),
	lblAnswer: document.querySelector("#lblAnswer"),
	lblTheAnswer: document.querySelector('#theAnswer'),
	lblHighOrLow: document.querySelector("#lblHighOrLow")
}

// this button generates a random number between 1 and 100
var genRandNums = function(){
	var random_number, random_number_array = []; 
	for (var i = 0; i < 10; i++){
		random_number = Math.floor(Math.random() * 100 + 1);
		random_number_array[i] = random_number;
	}
	return random_number_array;
}

// this is the random number
var random_number = genRandNums();

// this functions handles the click event for the generate button
var handleClick = function(){
	var	lblItem,
			txtItem,	
			brk;

	for (var i = 0; i < random_number.length; i++){
		// creates new label for each array element
		lblItem = document.createElement('label');
		// create a break after each label
		brk = document.createElement('br');
		txtItem = document.createTextNode(random_number[i]);
		lblItem.appendChild(txtItem);
		obj.lblAnswer.appendChild(lblItem);
		obj.lblAnswer.appendChild(brk);
	}
	console.log(random_number);
	this.removeEventListener('click', handleClick);
}

// this functions get the high number in the random number array
var getHigh = function() {
	random_number.sort();
	obj.lblTheAnswer.innerHTML = "The highest number is " + random_number[9];
}

var getLow = function() {
	random_number.sort();
	obj.lblTheAnswer.innerHTML = "The lowest number is " + random_number[0];
}

// this function is for the click events
var clickEvt = function(btn, evt){
	btn = btn.addEventListener('click', evt, false);
}

// waits until the user clicks the generate button to handle it
clickEvt(obj.btnGenNums, handleClick);
// waits till user clicks the user clicks the show high button to run
clickEvt(obj.btnHigh, getHigh);
// wait till user clicks the show low button to execute program
clickEvt(obj.btnLow, getLow);
