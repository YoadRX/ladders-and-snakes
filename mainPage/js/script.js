const signOut = document.getElementById('sign-out');
const currentUser = localStorage.getItem("currentUser");
console.log('✌️currentUser --->', currentUser);
function logOutFunc(){
    
    // currentUser = "";
    localStorage.removeItem("currentUser")


}


const welcomeUser = document.getElementById('user-welcome');
welcomeUser.innerHTML = "Welcome " + JSON.parse(currentUser).userName;
signOut.addEventListener("click", logOutFunc);