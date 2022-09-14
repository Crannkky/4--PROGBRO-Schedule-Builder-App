let users = JSON.parse(localStorage.getItem("users")) || [];

const firstName = document.getElementById("first-name-input");
const lastName = document.getElementById("last-name-input");
const username = document.getElementById("user-input");
const password = document.getElementById("pass-input");
const age = document.getElementById("age-input");
const email = document.getElementById("email-input");
let regCont = document.getElementById("register--return");
let finCont = document.getElementById("register--form");
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;
const userId = Math.floor(Math.random() * 1000) + 1;
const regBtn = document.getElementById("reg-btn");

regBtn.onclick = () => {
  const userIdent = users.filter((user) => user.email == email.value)[0];
  console.log(userIdent);

  if (firstName.value.length == 0) {
    return alert("Please fill in first name");
  } else if (lastName.value.length == 0) {
    return alert("Please fill in last name");
  } else if (username.value.length === 0) {
    return alert("Please fill in username");
  } else if (password.value.length == 0) {
    return alert("Please fill in password");
  } else if (age.value <= 18 || age.value >= 63) {
    return alert(
      "You need to be at least 18 years old and max 64 year old to register!"
    );
  } else if (age.value.length === 0) {
    return alert("Please fill in your age");
  } else if (email.value.length === 0) {
    return alert("Please fill in email");
  } else if (userIdent != undefined) {
    return alert("The email is already registered!");
  } else if (username.value.length == 0 && password.value.length == 0) {
    return alert("Please fill in username and password");
  } else if (password.value.length > 25) {
    return alert("Max pass length must be 25");
  } else if (!password.value.match(numbers)) {
    return alert("please add 1 number");
  } else if (!password.value.match(upperCaseLetters)) {
    return alert("please add 1 uppercase letter");
  } else if (!password.value.match(lowerCaseLetters)) {
    return alert("please add 1 lovercase letter");
  } else {
    let usersData = {
      Id: userId,
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      password: password.value,
      age: age.value,
      email: email.value,
      key: false,
    };

    users.push(usersData);
    localStorage.setItem("users", JSON.stringify(users));

    regCont.classList.remove("hide");
    finCont.classList.add("hide");
  }
};
function returnLogIn() {
  window.location.href = "login.html";
}
