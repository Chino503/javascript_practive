// stores all the objects in the document
var docObjs = {
	btnBirthdate: document.getElementById('btnBirthdates'),
	lstBirthdays: document.getElementById('options'),
	birthdaysArr: new Array(3)
}

// prompts the user for its name and birthdate 
function getBirthdates(name, date){
	for(var i = 0; i < docObjs.birthdaysArr.length; i++){
		name = prompt("Enter the name: ");
		date = prompt("Enter the date: ");
		docObjs.birthdaysArr[i] = name + " " + date;
	}
}

// makes new option elements displaying the name and birthdate
function displayBirthdays () {
	var option, optText, element;
	element = docObjs.lstBirthdays;
	for(var i = 0; i < docObjs.birthdaysArr.length; i++){
		console.log(docObjs.birthdaysArr[i]);
		option = document.createElement('option')
		optText = document.createTextNode(docObjs.birthdaysArr[i]);
		option.appendChild(optText);
		element.appendChild(option);
	}
	docObjs.lstBirthdays.style.display = 'block';
}

// When the button is clicked it will do the above functions
docObjs.btnBirthdate.addEventListener('click', function(){
	var name;
	var date;
	getBirthdates(name, date);
	displayBirthdays(name, date);
});