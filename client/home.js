let shifts = JSON.parse(localStorage.getItem("shifts")) || [];
let loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || [];
// function that displays the user's name using localstorage data
if (!loggedUser.length) {
  window.location = "../login.html";
}
