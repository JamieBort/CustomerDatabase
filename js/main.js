var body = document.querySelector("body"); // Selecting the HTML <body> tag.
var title = document.createElement("h1"); // Creating an HTML <h1> tag.
var message = body.appendChild(title); // attach title/HTML <h1> tag to the body/HTML <body> tag.
message.innerHTML="Internal Company Directory"; // Assign the Internal Company Directory string to the HTML <h1> tag.