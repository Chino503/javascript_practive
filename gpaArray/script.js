// stores the objects in the document.
var docObjs = {
    btnAddGpa: document.getElementById('btnAddGpa'),
    list: document.getElementById('list'),
    item: document.createElement('li'),
    gpaArr: []
}

var getItems = function () {

    for (var i = 0; i < 3; i++) {
        var itemsArr = prompt("Enter your #" + (i + 1) + " gpa");
        docObjs.gpaArr.push(itemsArr)
        console.log(docObjs.gpaArr[i]);
    }
}

docObjs.btnAddGpa.addEventListener('click', getItems);