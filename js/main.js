console.log(customers.info);
console.log(customers.info.seed);
console.log(customers.info.results);
console.log(customers.info.page);
console.log(customers.info.version);

console.log(customers.results);
console.log(customers.results[0]);
console.log(customers.results[0].gender);
console.log(customers.results[0].name);
console.log(customers.results[0].name.title);
console.log(customers.results[0].name.first);
console.log(customers.results[0].name.last);
console.log(customers.results[0].location);
console.log(customers.results[0].phone);
console.log(customers.results[0].id.value);


// console.log(customers.results[0].picture.thumbnail);

let body = document.querySelector("body");
let employeeProfile = document.createElement("div");
let employeeInfo = `<img src="${customers.results[0].picture.large}">
<h3>${customers.results[0].name.first} ${customers.results[0].name.last}</h3>
<ul>${customers.results[0].email}</ul>
<ul>${customers.results[0].location.street}</ul>
<ul>${customers.results[0].location.city}</ul>
<ul>${customers.results[0].location.state}</ul>
<ul>${customers.results[0].location.postcode}</ul>
<ul>${customers.results[0].phone}</ul>
<ul>${customers.results[0].id.value}</ul>`

employeeProfile.innerHTML = employeeInfo;
body.appendChild(employeeProfile);
