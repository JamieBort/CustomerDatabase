console.log(customers.info.seed);

let wholePage = document.querySelector("body");
  let employeeProfile = document.createElement("div");

  let employeeDirectory =
    `<img src="${customers.results[0].picture.large}">
    <h3>${customers.results[0].name.first} ${customers.results[0].name.last}</h3>

    <ul>
      <li>${customers.results[0].email}</li>
      <li>${customers.results[0].location.street}</li>
      <li>${customers.results[0].location.city}</li>
      <li>${customers.results[0].location.state}</li>
      <li>${customers.results[0].location.postcode}</li>
      <li>${customers.results[0].phone}</li>
      <li>${customers.results[0].id.value}</li>
    </ul>`;

    employeeProfile.innerHTML = employeeDirectory;
    wholePage.appendChild(employeeProfile);

// ===================

    let wholePage1 = document.querySelector("body");
      let employeeProfile1 = document.createElement("div");

      let employeeDirectory1 =
        `<img src="${customers.results[1].picture.large}">
        <h3>${customers.results[1].name.first} ${customers.results[1].name.last}</h3>

        <ul>
          <li>${customers.results[1].email}</li>
          <li>${customers.results[1].location.street}</li>
          <li>${customers.results[1].location.city}</li>
          <li>${customers.results[1].location.state}</li>
          <li>${customers.results[1].location.postcode}</li>
          <li>${customers.results[1].phone}</li>
          <li>${customers.results[1].id.value}</li>
        </ul>`;

        employeeProfile1.innerHTML = employeeDirectory1;
        wholePage1.appendChild(employeeProfile1);
