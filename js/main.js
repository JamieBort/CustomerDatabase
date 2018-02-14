// console.log(customers.info);
// console.log(customers.info.seed);
// console.log(customers.info.results);
// console.log(customers.info.page);
// console.log(customers.info.version);
//
// console.log(customers.results);
// console.log(customers.results[0]);
// console.log(customers.results[0].gender);
// console.log(customers.results[0].name);
// console.log(customers.results[0].name.title);
// console.log(customers.results[0].name.first);
// console.log(customers.results[0].name.last);
// console.log(customers.results[0].location);
// console.log(customers.results[0].phone);
// console.log(customers.results[0].id.value);


for (var i = 0; i < customers.results.length; i++) {

  let body = document.querySelector("body");
  let employeeProfile = document.createElement("div");
  let employeeInfo = `<img src="${customers.results[i].picture.large}">
<h3>${customers.results[i].name.first} ${customers.results[i].name.last}</h3>
<ul>${customers.results[0].email}</ul>
<ul>${customers.results[i].location.street}</ul>
<ul>${customers.results[i].location.city}</ul>
<ul>${customers.results[i].location.state}</ul>
<ul>${customers.results[i].location.postcode}</ul>
<ul>${customers.results[i].phone}</ul>
<ul>${customers.results[i].id.value}</ul>`

  employeeProfile.innerHTML = employeeInfo;
  body.appendChild(employeeProfile);
};

// =================================

// let body2 = document.querySelector("body");
// let employeeProfile2 = document.createElement("div");
// let employeeInfo2 = `<img src="${customers.results[1].picture.large}">
// <h3>${customers.results[1].name.first} ${customers.results[1].name.last}</h3>
// <ul>${customers.results[1].email}</ul>
// <ul>${customers.results[1].location.street}</ul>
// <ul>${customers.results[1].location.city}</ul>
// <ul>${customers.results[1].location.state}</ul>
// <ul>${customers.results[1].location.postcode}</ul>
// <ul>${customers.results[1].phone}</ul>
// <ul>${customers.results[1].id.value}</ul>`
//
// employeeProfile2.innerHTML = employeeInfo2;
// body2.appendChild(employeeProfile2);
