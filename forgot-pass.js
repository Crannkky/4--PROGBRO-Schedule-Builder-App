const userList = JSON.parse(localStorage.getItem("users"));
const email = document.getElementById("email-input");
const password = document.getElementById("pass-input");
const changeBtn = document.getElementById("change-btn");
const returnBtn = document.getElementById("return-btn");
let isValid = true;

changeBtn.onclick = () => {
  let userSelect = userList.filter((user) => {
    return user.email === email.value;
  })[0];

  if (userSelect === undefined) {
    return alert("User does not exist!");
  }

  userSelect.password = password.value;
  console.log(userSelect);

  const userEdit = userList.filter((user) => user.email != userSelect.email);
  console.log(userEdit);
  userEdit.push(userSelect);
  console.log(userEdit);

  let userLocal = localStorage.getItem("users");
  console.log(userLocal);
  userLocal = userLocal ? userLocal.split(",") : [];
  while (userLocal.length) {
    userLocal.pop("user");
    console.log(userLocal);
  }

  userLocal.push(userEdit);
  console.log(userLocal);
  localStorage.setItem("users", JSON.stringify(userEdit));
  const form = document.getElementById("forgot--form");
  const next = document.getElementById("forgot--return");
  form.classList.add("hide");
  next.classList.remove("hide");
};

returnBtn.onclick = () => {
  window.location.href = "login.html";
};
