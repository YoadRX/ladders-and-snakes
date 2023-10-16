const email = document.querySelectorAll(".email");
let submit = document.querySelector(".submit2");
let checkBox = document.querySelector(".chk-box");
const users = localStorage.getItem("usersArray")
let usersArray = JSON.parse(users);
const currentUser = localStorage.getItem("currentUser")
let currentUserArray = JSON.parse(currentUser);

console.log(usersArray);
function verifyPassword() {
    var pw = document.getElementById("pswd").value;
   //minimum password length validation and password
    if(currentUserArray.email == email.item(0).value && currentUserArray.password == pw && !(pw.length < 8 && pw == "")){
      return true;
    }
    else{
      alert("your password is empty or too short")
      return false;
    }
  }
  submit.addEventListener("click", function(){    
    console.log();
  
      if(checkBox.checked == true){
          // console.log("hey there");
        } 
  });
