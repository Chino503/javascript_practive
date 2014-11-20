
var docObjs = {
	btnBirthdate: document.getElementById('btnBirthdates'),
	lstBirthdays: document.getElementById('options'),
	birthdaysArr: [0,1,2]
}

function getBirthdates(name, date){
	for(var i = 0; i < docObjs.birthdaysArr.length; i++){
		name = prompt("Enter the name: ");
		date = prompt("Enter the date: ");
		docObjs.birthdaysArr[i] = name + " " + date;
	}
}

function displayBirthdays () {
	var option = document.createElement('option');
	for(var i = 0; i < docObjs.birthdaysArr.length; i++){
		 var optionText = document.createTextNode(docObjs.birthdaysArr[i].toString());
		docObjs.lstBirthdays.appendChild(option);
	}
}

docObjs.btnBirthdate.addEventListener('click', function(){
	var name;
	var date;
	getBirthdates(name, date);
	displayBirthdays(name, date);
	console.log(docObjs.birthdaysArr);
});