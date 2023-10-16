const repeatPassword = document.getElementById('repeatPassword');
const errorMessage = document.getElementsByClassName('errorMessageFalse');
const emailInput = document.getElementById('email');

const createUser = (e) => {
    e.preventDefault()
    repeatPassword.classList.remove('error');
    console.log(errorMessage[0].classList);
    errorMessage[0].classList.remove('errorMessageTrue');
    emailInput.classList.remove('error');
    errorMessage[1].classList.remove('errorMessageTrue');

    if (e.target[2].value !== e.target[3].value || emailInput.value === '') {
        if (e.target[2].value !== e.target[3].value) {
            repeatPassword.classList.add("error");
            errorMessage[1].classList.add("errorMessageTrue");
        }
        if (emailInput.value === '') {
            emailInput.classList.add("error");
            errorMessage[0].classList.add("errorMessageTrue");
        }
        return "error";
    }
    let usersArray = JSON.parse(localStorage.getItem("usersArray"));
    usersArray.push({
        userName: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
    })
    localStorage.setItem('usersArray', JSON.stringify(usersArray));
    console.log(errorMessage[0].classList);
}

const signUpForm = document.getElementById("signUp");
signUpForm.onsubmit = createUser;


