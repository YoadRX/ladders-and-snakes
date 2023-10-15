// const submitSignUp = document.getElementById("submitSignUp");

const createUser = (e) => {
    e.preventDefault()
    // console.log('✌️e --->', e.target[0].value);

    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    usersArray.push({
        userName: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
    })
    localStorage.setItem('usersArray', JSON.stringify(usersArray));

}
const signUpForm = document.getElementById("signUp");
signUpForm.onsubmit = createUser;
localStorage.setItem('usersArray', '[]');
function getUserDataToLocalStorage() {
    // console.log('✌️usersArray --->', usersArray);

}
