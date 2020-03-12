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

for (var i = 0; i < customers.results.length; i++) {
  var div = document.querySelector("body");
  var employeeProfile = document.createElement("div");
  var employeeInfo = `
    <img src="${customers.results[i].picture.large}">
    <h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
    <ul>${customers.results[i].email}</ul>
    <ul>${customers.results[i].location.street}</ul>
    <ul>${customers.results[i].location.city}</ul>
    <ul>${customers.results[i].location.state}</ul>
    <ul>${customers.results[i].location.postcode}</ul>
    <ul>${customers.results[i].phone}</ul>
    <ul class="social" >${customers.results[i].id.value}</ul>
    `;

  employeeProfile.innerHTML = employeeInfo;
  directoryDiv.appendChild(employeeProfile);
}

console.log(customers);