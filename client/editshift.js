let shifts = JSON.parse(localStorage.getItem("shifts")) || [];
let userLogged = localStorage.getItem("firstName");

document.querySelectorAll(".edit-td").forEach((item) => {
  item.addEventListener("click", (event) => {
    const shiftId = event.target.parentElement.id;
    const modalEdit = document.getElementById("modal-edit");
    const overlay = document.getElementById("overlay");
    const nameEdit = document.getElementById("name-input-edit");
    const startShiftEdit = document.getElementById("start-input-edit");
    const endShiftEdit = document.getElementById("end-input-edit");
    const wageEdit = document.getElementById("wage-input-edit");
    const workplaceEdit = document.getElementById("workplace-select-edit");
    const commentEdit = document.getElementById("comment-input-edit");

    if (modalEdit == null) {
      return;
    }
    modalEdit.classList.add("active");
    overlay.classList.add("active");
    console.log(shiftId);

    const filteredShift = shifts.filter((shift) => {
      console.log(shift.Id);
      return shift.Id == shiftId;
    })[0];
    console.log(filteredShift);

    console.log("clicked");

    nameEdit.value = filteredShift.name;
    startShiftEdit.value = filteredShift.startShift;
    endShiftEdit.value = filteredShift.endShift;
    wageEdit.value = filteredShift.wage;
    workplaceEdit.value = filteredShift.workplace;
    commentEdit.value = filteredShift.comment;

    let editBtn = document.getElementById("edit-btn");

    editBtn.onclick = () => {
      const nameEdit = document.getElementById("name-input-edit");
      const startShiftEdit = document.getElementById("start-input-edit");
      const endShiftEdit = document.getElementById("end-input-edit");
      const wageEdit = document.getElementById("wage-input-edit");
      const workplaceEdit = document.getElementById("workplace-select-edit");
      let hour1Edit = startShiftEdit.value;
      let hour2Edit = endShiftEdit.value;
      let hoursEdit = Math.abs(
        (Date.parse(hour1Edit) - Date.parse(hour2Edit)) / 3600000
      );
      let profitShiftEdit = parseInt(hoursEdit * wageEdit.value);
      // const shiftIdEdit = document.getElementById("id-input-edit");
      const commentEdit = document.getElementById("comment-input-edit");

      let editObject = {
        name: nameEdit.value,
        startShift: startShiftEdit.value,
        endShift: endShiftEdit.value,
        wage: wageEdit.value,
        workplace: workplaceEdit.value,
        Id: parseInt(shiftId),
        profit: profitShiftEdit,
        comment: commentEdit.value,
      };

      console.log(editObject);

      let shiftsEdit = shifts.filter((shift) => shift != filteredShift);
      console.log(shiftsEdit);
      shiftsEdit.push(editObject);
      console.log(shiftsEdit);

      let shiftsLocal = localStorage.getItem("shifts");
      shiftsLocal = shiftsLocal ? shiftsLocal.split(",") : [];
      while (shiftsLocal.length) {
        shiftsLocal.pop("shift");
        console.log(shiftsLocal);
      }

      shiftsLocal.push(shiftsEdit);

      localStorage.setItem("shifts", JSON.stringify(shiftsEdit));

      closeModal(modalEdit);
    };
  });
});

const closeModalBtn = document.getElementById("close-btn-edit");

closeModalBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal-edit");
  closeModal(modal);
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
  window.location.reload();
}
