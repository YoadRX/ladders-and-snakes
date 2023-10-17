const signOut = document.getElementById('sign-out');
let currentUser = localStorage.getItem("currentUser");
console.log('✌️currentUser --->', currentUser);
function logOutFunc(){
    
    currentUser = "";
    localStorage.setItem("currentUser", currentUser)


}
signOut.addEventListener("click", logOutFunc);
