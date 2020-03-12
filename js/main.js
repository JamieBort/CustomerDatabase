var body = document.querySelector("body"); // Selecting the HTML <body> tag.

var titleDiv = document.createElement("div"); // generate a div
titleDiv.setAttribute("id", "titleID"); // give it an id = titleID
var title = document.createElement("h1");
body.appendChild(titleDiv);
titleDiv.appendChild(title);
title.innerHTML = "Internal Company Directory";

var directoryDiv = document.createElement("div"); // generate second div
directoryDiv.setAttribute("id", "directoryID"); // give it an id = directoryID
body.appendChild(directoryDiv);
var directoryDiv = document.getElementById("directoryID");
for(var i = 0; i < customers.results.length; i++) {

// var directoryDiv = document.getElementById("directoryID");
  var li = document.createElement("li");
  // var fullName = directoryDiv.appendChild(li);
  var employeeInfo = directoryDiv.appendChild(li);

employeeInfo.innerHTML = `<h3>a title</h3>`;

  // fullName.innerHTML=customers.results[i].name.title + " " + customers.results[i].name.first + " " + customers.results[i].name.last;

  }

console.log(customers);