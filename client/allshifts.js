let shifts = JSON.parse(localStorage.getItem("shifts")) || [];
let userLogged = JSON.parse(localStorage.getItem("loggedUser")) || [];
if (!userLogged.length) {
  window.location = "../login.html";
}

function displayAllShift(shifts) {
  document.querySelector("tbody").innerHTML = " ";

  shifts.forEach((shift) => {
    const shiftRow = document.createElement("tr");
    shiftRow.setAttribute("id", shift.Id);
    shiftRow.innerHTML = `
        <td>${shift.name} </td>
        <td>${shift.startShift}</td>
        <td>${shift.endShift} </td>
        <td>${shift.workplace}</td>

    `;

    document.querySelector("tbody").appendChild(shiftRow);
    document.querySelectorAll("td").forEach((item) => {});
  });
}

displayAllShift(shifts);

let inputName = document.getElementById("search-name-input");
inputName.onkeyup = () => {
  let filterName = inputName.value.toUpperCase();
  let table = document.getElementById("shift-table");
  let tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filterName) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

// edit database rows onclick + open and close edit shift modal
