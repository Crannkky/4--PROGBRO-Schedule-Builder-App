let users = JSON.parse(localStorage.getItem("users"));
let loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || [];
let logBtn = document.getElementById("log-btn");
let userLog = document.getElementById("user-input");
let passLog = document.getElementById("pass-input");
let logKey = "logged user!";
let checkUser = localStorage.getItem("loggedUser");

logBtn.addEventListener("click", (event) => {
  const filteredUser = users.filter((user) => {
    if (user.email === userLog.value || user.password === passLog.value) {
      return user.email === userLog.value;
    } else if (userLog.length === 0 || passLog.length === 0) {
      return console.log("Please fill in your details!");
    } else if (
      user.email !== userLog.value ||
      user.password !== passLog.value
    ) {
      console.log("User doesnt exist!");
    }
  })[0];

  if (
    filteredUser.email === userLog.value &&
    filteredUser.password !== passLog.value
  ) {
    alert("Incorect password!");
  } else {
    const loggedUserData = {
      Id: filteredUser.Id,
      firstName: filteredUser.firstName,
      lastName: filteredUser.lastName,
      username: filteredUser.username,
      password: filteredUser.password,
      age: filteredUser.age,
      email: filteredUser.email,
      key: true,
    };

    loggedUser.push(loggedUserData);
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    localStorage.setItem("loggedKey", JSON.stringify(logKey));

    window.location.href = "./client/home.html";
  }
});
