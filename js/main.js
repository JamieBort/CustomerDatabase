var body = document.querySelector("body"); // Selecting the HTML <body> tag.
var bodyDiv = document.createElement("div");
bodyDiv.setAttribute("id", "bodyDiv"); // give it an id = bodyDiv
body.appendChild(bodyDiv);


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

for (var i = 0; i < customers.results.length; i++) {
  var div = document.querySelector("body");
  var employeeProfile = document.createElement("div");
  employeeProfile.setAttribute("class", "employeeProfile"); // give it an id = titleID
  var employeeInfo = `
    <img src="${customers.results[i].picture.large}">
    <h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
    <p>${customers.results[i].email}</p>
    <p>${customers.results[i].location.street}</p>
    <p>${customers.results[i].location.city}</p>
    <p>${customers.results[i].location.state}</p>
    <p>${customers.results[i].location.postcode}</p>
    <p>${customers.results[i].phone}</p>
    <p class="social" >${customers.results[i].id.value}</p>
    `;

  employeeProfile.innerHTML = employeeInfo;
  directoryDiv.appendChild(employeeProfile);
}

bodyDiv.appendChild(titleDiv);
bodyDiv.appendChild(directoryDiv);

console.log(customers);