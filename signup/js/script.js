const repeatPassword = document.getElementById('repeatPassword');
const password = document.getElementById('password');
const errorMessages = document.getElementsByClassName('errorMessageFalse');
const emailInput = document.getElementById('email');
const username = document.getElementById('username');
//all the elements from html


const createUser = (e) => {
console.log('✌️e --->', e);
    e.preventDefault()
    repeatPassword.classList.remove('error');
    password.classList.remove('error');
    username.classList.remove('error');
    emailInput.classList.remove('error');
    for (i = 0; i < errorMessages.length; i++) {
        errorMessages[i].classList.remove('errorMessageTrue');
    }
    //remove all error class from all elements

    if (password.value !== repeatPassword.value || emailInput.value === '' || username.value.length < 5 || password.value.length < 6) {
        if (password.value !== repeatPassword.value) {
            repeatPassword.classList.add("error");
            errorMessages[3].classList.add("errorMessageTrue");
        }
        if (emailInput.value === '') {
            emailInput.classList.add("error");
            errorMessages[1].classList.add("errorMessageTrue");
        }
        if (username.value.length < 5) {
            username.classList.add("error");
            errorMessages[0].classList.add("errorMessageTrue");
        }
        if (password.value.length < 6) {
            password.classList.add("error");
            errorMessages[2].classList.add("errorMessageTrue");
        }
        return;
    }
    //checks if the user inputs are valid, if not it adds error classes to the right elements


    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    if (!usersArray) { usersArray = [] }

    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email === emailInput.value) {
            alert("this email is already in use")
            return false
        }
    }

    usersArray.push({
        userName: username.value,
        email: emailInput.value,
        password: password.value
    })

    localStorage.setItem('usersArray', JSON.stringify(usersArray));
    //assd the user inputs as an object in the arry in the local storage
    const currentUser = localStorage.setItem('currentUser', JSON.stringify({
        userName: username.value,
        email: emailInput.value,
        password: password.value
    }))
    //store current user info in local storage
    location.assign("../../mainPage/html/mainPage.html");
}

const signUpForm = document.getElementById("signUp");
signUpForm.onsubmit = createUser;
//activate the function once it is submitted


