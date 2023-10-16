const repeatPassword = document.getElementById('repeatPassword');
const password = document.getElementById('password');
const errorMessage = document.getElementsByClassName('errorMessageFalse');
const emailInput = document.getElementById('email');
const username = document.getElementById('username');
//all the elements from html


const createUser = (e) => {
    e.preventDefault()
    repeatPassword.classList.remove('error');
    password.classList.remove('error');
    username.classList.remove('error');
    emailInput.classList.remove('error');
    for (i = 0; i < errorMessage.length; i++) {
        errorMessage[i].classList.remove('errorMessageTrue');
    }
    //remove all error class from all elements


    if (e.target[2].value !== e.target[3].value || emailInput.value === '' || username.value.length < 6 || password.value < 6) {
        if (e.target[2].value !== e.target[3].value) {
            repeatPassword.classList.add("error");
            errorMessage[3].classList.add("errorMessageTrue");
        }
        if (emailInput.value === '') {
            emailInput.classList.add("error");
            errorMessage[1].classList.add("errorMessageTrue");
        }
        if (username.value.length < 5) {
            username.classList.add("error");
            errorMessage[0].classList.add("errorMessageTrue");
        }
        if (password.value.length < 5) {
            password.classList.add("error");
            errorMessage[2].classList.add("errorMessageTrue");
        }
        return "error";
    }
    //checks if the user inputs are valid, if not it adds error classes to the right elements

    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    usersArray.push({
        userName: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
    })
    localStorage.setItem('usersArray', JSON.stringify(usersArray));
    console.log(errorMessage[0].classList);
    //assd the user inputs as an object in the arry in the local storage
    const currentUser = localStorage.setItem('currentUser', JSON.stringify({
        userName: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
    }))
    //store current user info in local storage
}

const signUpForm = document.getElementById("signUp");
signUpForm.onsubmit = createUser;
//activate the function once it is submitted


