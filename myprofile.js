// function to set the user's name in the navbar
let shifts = JSON.parse(localStorage.getItem("shifts")) || [];
let userLogged = JSON.parse(localStorage.getItem("loggedUser")) || [];
// if (!userLogged.length) {
//   window.location = "./login.html";
// }
let userList = JSON.parse(localStorage.getItem("users"));

let userName = userLogged.map((log) => log.firstName);
let userEmail = userLogged.map((log) => log.email);
let userId = userLogged.map((log) => log.Id);
let nameFilter = userName.toString();
let emailFilter = userEmail.toString();
let idFilter = parseInt(userId.toString());
window.onload = () => {
  let logUser = userLogged.filter((log) => {
    return log.firstName === nameFilter;
  })[0];
  let userDb = userList.filter((user) => {
    return user.email === emailFilter;
  })[0];
  let logId = userLogged.filter((log) => {
    return log.Id === idFilter;
  })[0];
  console.log(userDb);
  console.log(logId);
  console.log(logUser);

  const userInfo = {
    Id: logUser.Id,
    firstName: logUser.firstName,
    lastName: logUser.lastName,
    username: logUser.username,
    password: logUser.password,
    age: logUser.age,
    email: logUser.email,
  };
  console.log(userInfo);
  // selecting all the myprofile details inputs to hava a global scope

  const firstNameProfile = document.getElementById("first-profile");
  const lastNameProfile = document.getElementById("last-profile");
  const usernameProfile = document.getElementById("user-profile");
  const passwordProfile = document.getElementById("pass-profile");
  const ageProfile = document.getElementById("age-profile");
  const emailProfile = document.getElementById("email-profile");
  const editInfoBtn = document.getElementById("edit-modal-btn");

  // selecting the modal's input to have a global scope
  const firstNameModal = document.getElementById("first-edit");
  const lastNameModal = document.getElementById("last-edit");
  const usernameModal = document.getElementById("username-edit");
  const passwordModal = document.getElementById("password-edit");
  const emailModal = document.getElementById("email-edit");
  const ageModal = document.getElementById("age-edit");
  const saveModalBtn = document.getElementById("edit-btn");

  // retrieveing user info from localstorage and creating an object with global scope

  // console.log(userInfo); // function to fill in the user info inside the main segement of the myprofile page

  function fillInfo() {
    firstNameProfile.value = userInfo.firstName;
    lastNameProfile.value = userInfo.lastName;
    usernameProfile.value = userInfo.username;
    passwordProfile.value = userInfo.password;
    ageProfile.value = userInfo.age;
    emailProfile.value = userInfo.email;

    firstNameModal.value = userInfo.firstName;
    lastNameModal.value = userInfo.lastName;
    usernameModal.value = userInfo.username;
    passwordModal.value = userInfo.password;
    ageModal.value = userInfo.age;
    emailModal.value = userInfo.email;
  }

  fillInfo();

  // //////////////////////////////////////////////////////////
  // function to open and close the modal + overlay activation

  const openModalBtn = document.getElementById("edit-modal-btn");
  const closeModalBtn = document.getElementById("close-edit");
  const overlay = document.getElementById("overlay");

  console.log(closeModalBtn);

  openModalBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal-data");
    openModal(modal);
  });

  overlay.addEventListener("click", () => {
    const modal = document.querySelectorAll(".modal.active");
    modal.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalBtn.addEventListener("click", () => {
    const modal = document.getElementById("modal-data");
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

  saveModalBtn.onclick = () => {
    let editUser = {
      Id: userInfo.Id,
      firstName: firstNameModal.value,
      lastName: lastNameModal.value,
      username: usernameModal.value,
      password: passwordModal.value,
      age: ageModal.value,
      email: emailModal.value,
    };

    let userEdit = userLogged.filter((log) => log !== logUser);
    console.log(userEdit);
    userEdit.push(editUser);
    console.log(userEdit);

    let userLocal = localStorage.getItem("loggedUser");
    console.log(userLocal);
    userLocal = userLocal ? userLocal.split(",") : [];
    while (userLocal.length) {
      userLocal.pop("log");
      console.log(userLocal);
    }

    userLocal.push(userEdit);
    console.log(userLocal);

    localStorage.setItem("loggedUser", JSON.stringify(userEdit));

    let userListEdit = userList.filter((user) => user.Id != logId.Id);
    console.log(userListEdit);
    userListEdit.push(editUser);
    console.log(userListEdit);

    let userListLocal = localStorage.getItem("users");
    console.log(userListLocal);
    userListLocal = userListLocal ? userListLocal.split(",") : [];
    while (userListLocal.length) {
      userListLocal.pop("user");
      console.log(userListLocal);
    }

    userListLocal.push(userListEdit);
    console.log(userListLocal);
    localStorage.setItem("users", JSON.stringify(userListEdit));

    console.log(userLocal);
    console.log(userListLocal);
    fillInfo();
    closeModal(modal);
    window.location.reload();
  };
};

// /////////////////////////////////////////////////
// function to add shifts from myProfile tab
