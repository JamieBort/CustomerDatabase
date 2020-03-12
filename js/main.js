var body = document.querySelector("body"); // Selecting the HTML <body> tag.
var title = document.createElement("h1"); // Creating an HTML <h1> tag.
var message = body.appendChild(title); // attach title/HTML <h1> tag to the body/HTML <body> tag.

// Now need to comb through the customers.js file to "inject" into the html doc.
var div = document.getElementById("directory");
for(var i=0; i<customers.results.length; i++){
  // <div>
  //   <picture></picture>
  //   <li>Title name LastName</li>
  //   <li>Email</li>
  //   <li>Address</li>
  // </div>

  // <img src="wrongname.gif" alt="Flowers in Chania"></img>

  var img = document.createElement("img");
  var myPic = div.appendChild(img);
  // let employeeInfo = `<img src="${customers.results[i].picture.large}">
  img.src = "${customers.results[i].picture.large}";

  // img.src = "../../../Downloads/IMG-20200310-WA0002.jpg";

var li = document.createElement("li");
var fullName = div.appendChild(li);
fullName.innerHTML=customers.results[i].name.title + " " + customers.results[i].name.first + " " + customers.results[i].name.last;

var li = document.createElement("li");
var street = div.appendChild(li);
street.innerHTML=customers.results[i].location.street;

var li = document.createElement("li");
var emailAddress = div.appendChild(li);
emailAddress.innerHTML=customers.results[i].phone;



}
message.innerHTML="Internal Company Directory"; // Assign the Internal Company Directory string to the HTML <h1> tag.
console.log(customers);