const email = document.querySelectorAll(".email");
let submit = document.querySelector(".submit2");
let checkBox = document.querySelector(".chk-box");
// if(localStorage.getItem()

const usersArray = JSON.parse(localStorage.getItem('usersArray'));



function verifyPassword() {
  const pw = document.getElementById("pswd").value;
  //check empty password field
  if (pw == "") {
    alert("is nothing there")
    return false;
  }

  //minimum password length validation
  if (pw.length < 6) {
    // 
    alert("your password is too short")
    return false;
  }
  for (i = 0; i < usersArray; i++) {
    // for (i) {
    //   console.log("hi");
    // }
  }
}
submit.addEventListener("click", function () {
  if (checkBox.checked == true) {
    // console.log("hey there");
  }
});
