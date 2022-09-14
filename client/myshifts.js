// variables needed to be declared in global scope
let shifts = JSON.parse(localStorage.getItem("shifts")) || [];
let userLogged = JSON.parse(localStorage.getItem("loggedUser")) || [];
if (!userLogged.length) {
  window.location = "../login.html";
}
let userName = userLogged.map((log) => log.firstName);
let nameFilter = userName.toString();
let nameParam = shifts.filter((shift) => {
  return shift.name === nameFilter;
});

// /////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////
// function to display the shifts of the logged user

function displayShift(nameParam) {
  document.querySelector("tbody").innerHTML = " ";

  nameParam.forEach((object) => {
    const shiftRow = document.createElement("tr");
    shiftRow.setAttribute("id", object.Id);
    shiftRow.innerHTML = `
        <td>${object.name} </td>
        <td>${object.startShift}</td>
        <td>${object.endShift} </td>
        <td>${object.wage} $ </td>
        <td>${object.workplace}</td>
        <td>${object.profit} $ </td>
    `;

    document.querySelector("tbody").appendChild(shiftRow);
    document.querySelectorAll("td").forEach((item) => {
      item.classList.add("edit-td");
      item.style.cursor = "pointer";
    });
  });
}

displayShift(nameParam);
// //////////////////////////////////////////////////////////////
