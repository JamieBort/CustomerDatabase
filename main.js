console.log(customers);

for (var i = 0; i < customers.results.length; i++) {
  // console.log(customers);
  console.log(customers.results[i].name.first);
}

// NOTE: no need to create <link rel="stylesheet" href="style.css">

// create variables


// create div's, img's, and p's.

// create divElement1

document.getElementsByTagName('body');

console.log(document.getElementsByTagName('body'));

let divElement1 = document.createElement('div');

// give the divElement1 a class = "one"
divElement1.setAttribute("class", "one");

// append divElement1 to the body
document.body.appendChild(divElement1);
console.log(divElement1);

// create the h1
let h1Element = document.createElement('h1');

h1Element.setAttribute("class", "h1Element");
h1Element.setAttribute("id", "h1Element");
console.log(h1Element);

// Append the new element to the parent element
divElement1.appendChild(h1Element);

// Populate h1 with text
h1Element.innerHTML = "INTERNAL COMPANY DIRECTORY";








// create divElement2
var divElement2 = document.createElement('div');

// give divElement2 a class = "two"
divElement2.setAttribute("class", "two");

// append divElement2 to divElement1
divElement1.appendChild(divElement2);
console.log(divElement2);

// create divElement3
var divElement3 = document.createElement('div');

// append divElement3 to divElement2
divElement2.appendChild(divElement3);

// give divElement3 a class = "three"
divElement2.setAttribute("class", "three");

// create img
var img = document.createElement('img');


// ============================
// creating the first row (beginning)
// ============================

var dummyArray = [];

function function1() {

  for (var i = 0; i < 4; ++i) {

    //
    dummyArray[i] = document.createElement('p');




  // create divElement4
  var divElement4 = document.createElement('div');

  // append divElement3 to divElement2
  divElement3.appendChild(divElement4);

  // give divElement3 a class = "three"
  divElement3.setAttribute("class", "four");


  // append img to divElement2
  divElement4.appendChild(img);
  console.log(img);
  // give img a class = "three"
  img.setAttribute("src", "https://randomuser.me/api/portraits/men/0.jpg");

  // create ptag0 - ptag3

  // variables for ptag0 - ptag3

  let variableA = "John Doe"
  let variableB = "12345 Street Address"
  let variableC = "Cool City, Georgia"
  let variableD = "555-555-5555"

  var ptag = [];

  function createPElement() {

    for (var i = 0; i < 4; ++i) {
      // create p tags
      ptag[i] = document.createElement('p');

      // append p1-p4 to divElement3
      divElement3.appendChild(ptag[i]);

      console.log(ptag[i]);

      if ([i] == 0) {
        // create name class
        ptag[i].setAttribute("class", "name");

        // Populate Ptag0 with text
        ptag[i].innerHTML = variableA;
      }
      if ([i] == 1) {
        // create street class
        ptag[i].setAttribute("class", "street");

        // Populate ptag1 with text
        ptag[i].innerHTML = variableB;
      }
      if ([i] == 2) {
        // create city class
        ptag[i].setAttribute("class", "city");

        // Populate Ptag2 with text
        ptag[i].innerHTML = variableC;
      }
      if ([i] == 3) {
        // create number class
        ptag[i].setAttribute("class", "number");

        // Populate Ptag3 with text
        ptag[i].innerHTML = variableD;
      }
    }
  }

  createPElement();
}

// ============================
// creating the first row (end)
// ============================
