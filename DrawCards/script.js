// this is an object that stores the document objects
var docObjs = {
	btnDrawCards: document.getElementById('btnDrawCards'),
	txtNumInput: document.getElementById('txtNumInput')
}

// this function checks to see if text input is a number
function isNum(num) {
	try {
		if(isNaN(num)) throw "Your input was not a number";
		if(num == null) throw "Your input was empty";
	} catch(err){
		alert(err);
	}
}