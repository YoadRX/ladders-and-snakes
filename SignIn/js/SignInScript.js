const currentUserCheck = localStorage.getItem('currentUser')

if (currentUserCheck){
  location.assign("../../mainPage/html/mainPage.html");
}
const email = document.getElementById("email");
const submit = document.querySelector(".submit2");
const signInForm = document.getElementById("login-form")
signInForm.onsubmit = verifyPassword


// verify the email and the password that in usersArray
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


