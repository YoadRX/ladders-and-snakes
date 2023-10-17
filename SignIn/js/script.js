const currentUserCheck = localStorage.getItem('currentUser');
console.log('✌️currentUserCheck --->', currentUserCheck);

if (currentUserCheck.length > 0){
  location.assign("/home/shani/project2/projectGame/mainPage/html/mainPage.html");
}
const email = document.querySelector(".email");
let submit = document.querySelector(".submit2");
<<<<<<< HEAD
let checkBox = document.querySelector(".chk-box");

const users = localStorage.getItem("usersArray")
let usersArray = JSON.parse(users);
// const currentUser = localStorage.getItem("currentUser")
let currentUserArray = JSON.parse(currentUser);
=======
>>>>>>> bb4a66fe4fed3cbac5f4fe67537d570eb1e1883d
var checkbox = document.querySelector("input[name=checkbox]");
// const users = localStorage.getItem("usersArray")
// let usersArray = JSON.parse(users);
// const currentUser = localStorage.getItem("currentUser");
// console.log('currentUser :', currentUser);
var checkIfkeepIn=[{}]




function verifyPassword() {
    var pw = document.getElementById("pswd").value;
   //minimum password length validation and password
    if(currentUserArray.email == email.value && currentUserArray.password == pw && !(pw.length < 8 && pw == "")){
      return true;
    }
    else{
      alert("your password is empty or too short")
      return false;
    }
  }
  submit.addEventListener("click", function(){    
    checkbox.addEventListener('change', function() {
      if (this.checked) {
      checkIfkeepIn = {checkIfkeepIn: this.checked};
      } else {
      }
    });
  });
<<<<<<< HEAD
=======

>>>>>>> bb4a66fe4fed3cbac5f4fe67537d570eb1e1883d
  console.log(email.item(0).value);
  const currentUser = localStorage.setItem('currentUser', JSON.stringify({
    userName: username.item(0).value,
    email: email.item(0).value,
    password: pw
}))
<<<<<<< HEAD

=======
>>>>>>> bb4a66fe4fed3cbac5f4fe67537d570eb1e1883d
