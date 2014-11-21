
// object containind the document objects.
var docObjs = {
	btnAdd: document.getElementById('btnAddArr'),
	options: document.getElementById('lstDisplayGPA'),
	gpa: new Array(4) // stores the user's gpas
}

// function gets user's gpa and store in the gpa array.
function getGPA(gpa){
	for(var i = 0; i < docObjs.gpa.length; i++){
		gpa = prompt("Please enter gpa #" + (i + 1));
		try {
			if(isNaN(gpa)) throw "Your input is not a number";
			if(gpa == "") throw "Your input is empty";
			if(gpa < 0) throw "You cannot have a negative GPA";
			if(gpa > 6) throw "You cannot have a gpa greater than 6"
		} catch(err) {
			alert("Input " + err);
			break;
		}
		docObjs.gpa[i] = gpa;
	}
}

// functions displays the gpas in a list box 
function showGPA(){
	var option, txt, element;
	element = docObjs.options;
	for(var i = 0; i < docObjs.gpa.length; i++){
		console.log(docObjs.gpa[i]);
		option = document.createElement('option');
		txt = document.createTextNode("GPA #" + (i + 1) + " is " + docObjs.gpa[i]);
		option.appendChild(txt);
		element.appendChild(option);
		if (docObjs.gpa[i] == undefined || docObjs.gpa[i] == "undefined") {
			docObjs.options.style.display = 'none';
		}
		else {
			docObjs.options.style.display = 'block';
		}
	}
}

// this function stores the click event
function btnClick(){
	getGPA();
	showGPA();
}

// the click event
docObjs.btnAdd.addEventListener('click', btnClick);

