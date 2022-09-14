const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
let logOut = document.getElementById("log-out");
if (loggedUser) {
  loggedUser[0].key = false;
}

logOut.onclick = function () {
  if (!loggedUser[0].key) {
    window.location = "../login.html";
    window.localStorage.removeItem("loggedKey");
    window.localStorage.removeItem("loggedUser");
  }
};
