const currentUserCheck = localStorage.getItem('currentUser')

if (currentUserCheck){
  location.assign("../../mainPage/html/mainPage.html");
}
const email = document.getElementById("email");
let submit = document.querySelector(".submit2");
var checkbox = document.querySelector("input[name=checkbox]");
const signInForm = document.getElementById("login-form")
signInForm.onsubmit = verifyPassword
// const users = localStorage.getItem("usersArray")
// let usersArray = JSON.parse(users);
// const currentUser = localStorage.getItem("currentUser");
// console.log('currentUser :', currentUser);
var checkIfkeepIn = [{}]




function verifyPassword(e) {
  e.preventDefault()
  const usersArray = JSON.parse(localStorage.getItem('usersArray'));
  console.log("hello")
  const pw = document.getElementById("pswd").value;
  //minimum password length validation and password
  for (i = 0; i < usersArray.length; i++) {
    if (email.value === usersArray[i].email) {
      if (usersArray[i].password === pw) {
        localStorage.setItem('currentUser', JSON.stringify(usersArray[i]))
        location.assign("../../mainPage/html/mainPage.html");
        return;
      } else {
        alert('your password is incorrect')
        return
      }
    }
  }
  alert('we can\'t find you in our records, please sgin up first')
}
submit.addEventListener("click", function () {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      checkIfkeepIn = { checkIfkeepIn: this.checked };
    } else {
    }
  });
});

// console.log(email.item(0).value);
// const currentUser = localStorage.setItem('currentUser', JSON.stringify({
//   userName: username.item(0).value,
//   email: email.item(0).value,
//   password: pw
// }))
