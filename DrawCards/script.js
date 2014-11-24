// this is an object that stores the document objects
var docObjs = {
	btnDrawCards: document.getElementById('btnDrawCards'),
	txtNumInput: document.getElementById('txtNumInput'),
	cardsArr: new Array(9),
	the_form: document.querySelector("#the_form")
}

// this function checks to see if text input is a number
function isNum(num) {
	try {
		if(isNaN(num)) throw "Your input was not a number";
		if(num == null || num == undefined || num == "undefined") throw "Your input was empty";
	} catch(err){
		alert(err);
		num = null;
	}
	return num;
}

// random number generator function
function randNum(){
	num =  Math.floor(Math.random() * 9);
	return num;
}

// this functions generates the cards
function drawCards(num){
	var randomNum, times;
	times = isNum(docObjs.txtNumInput.value);					
	for(var i = 0; i < times ; i++){
		randomNum = randNum();
		// console.log(randomNum)
		docObjs.cardsArr[i + 2] =  randomNum + 2;
		console.log(docObjs.cardsArr[i + 2]);
	}
}

// display draws on the label
function showDraws(){
	var label, text, element, 
	num = isNum(docObjs.txtNumInput.value),
	the_break;
	for(var i = 0; i < num; i++){
		label = document.createElement('label');
		text = document.createTextNode("You drew #" + docObjs.cardsArr[i + 2] + " times");
		the_break = document.createElement('br');
		element = docObjs.the_form;
		label.id = "lbl"
		label.appendChild(text);
		element.appendChild(label);
		element.appendChild(the_break);
	}
}

// this is the click event
docObjs.btnDrawCards.addEventListener('click', function(){
	// isNum(docObjs.txtNumInput.value);
	var num;
	drawCards(num);
	showDraws();
});
