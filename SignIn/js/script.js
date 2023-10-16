const email = document.querySelectorAll(".email");
let submit = document.querySelector(".submit2");
let checkBox = document.querySelector(".chk-box");
        // if(localStorage.getItem()
function verifyPassword() {
    var pw = document.getElementById("pswd").value;
    //check empty password field
    if(pw == "") {
        alert("is nothing there")
       return false;
    }
   
   //minimum password length validation
    if(pw.length < 8) {
        // 
        alert("your password is too short")
       return false;
    }
  }
submit.addEventListener("click", function(){    
    if(checkBox.checked == true){
        // console.log("hey there");
      }
});
