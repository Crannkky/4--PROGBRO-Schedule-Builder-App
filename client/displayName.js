let loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || [];

function setUserName() {
  const greet = document.getElementById("user-name");
  const userName = loggedUser.map((log) => log.firstName);

  greet.innerText = userName;
}
setUserName();
