let shifts = JSON.parse(localStorage.getItem("shifts")) || [];
let userLogged = JSON.parse(localStorage.getItem("loggedUser"));
let userName = userLogged.map((log) => log.firstName);
let nameFilter = userName.toString();

const openModalBtn = document.getElementById("add-shift");
const closeModalBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

openModalBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  openModal(modal);
});

overlay.addEventListener("click", () => {
  const modal = document.querySelectorAll(".modal.active");
  modal.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal");
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// modal data inserted transpose inside the table
const saveBtn = document.getElementById("save-btn");
let workerName = document.getElementById("name-input");
workerName.value = nameFilter;
let startShift = document.getElementById("start-input");
let endShift = document.getElementById("end-input");
let wage = document.getElementById("wage-input");
let workplace = document.getElementById("workplace-select");
let shiftId = document.getElementById("id-input");
let comment = document.getElementById("comment-input");

const uuid = Math.floor(Math.random() * 1000) + 1;

saveBtn.onclick = function () {
  let hour1 = startShift.value;
  console.log(hour1);
  let hour2 = endShift.value;
  console.log(hour2);
  let hours = Math.abs((Date.parse(hour1) - Date.parse(hour2)) / 3600000);
  console.log(hours);
  let profitShift = parseInt(hours * wage.value);
  console.log(profitShift);

  if (startShift.value.length === 0) {
    alert("Plase fill in your start date!");
  } else if (endShift.value.length === 0) {
    alert("Plase fill in your end date!");
  } else if (wage.value.length === 0) {
    alert("Please insert your hourly wage!");
  } else if (workplace.value.length === 0) {
    alert("Please choose your shift workplace!");
  } else {
    let shiftObject = {
      name: workerName.value,
      startShift: startShift.value,
      endShift: endShift.value,
      wage: wage.value,
      workplace: workplace.value,
      Id: uuid,
      profit: profitShift,
      comment: comment.value,
    };

    console.log(hour1);
    console.log(hour2);
    console.log(hours);
    console.log(profitShift);
    console.log(shiftObject);

    shifts.push(shiftObject);
    localStorage.setItem("shifts", JSON.stringify(shifts));
  }
  let inputEmpty = document.getElementsByTagName("input");
  inputEmpty.value = "";
  closeModal(modal);
  window.location.reload();
};
