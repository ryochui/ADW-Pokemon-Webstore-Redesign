const form = document.getElementById('form');

const setError = (element, message) => {
    const detailRow = element.parentElement;
    const errorDisplay = detailRow.querySelector('.error');

    errorDisplay.innerText = message;
    detailRow.classList.add('error');
    detailRow.classList.remove('success');
};

const setSuccess = element => {
    const detailRow = element.parentElement;
    const errorDisplay = detailRow.querySelector('.error');

    errorDisplay.innerText = '';
    detailRow.classList.add('success');
    detailRow.classList.remove('error');
};

function validateForm() {
    let isValid = true;
    
    const username = document.getElementById("username");
    const email = document.getElementById("email")
    const password = document.getElementById("password");
    const password2 = document.getElementById("repeat_password")

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(usernameValue === '') {
        setError(document.getElementById("username"), 'Username is required');
        isValid = false;
    } else {
        setSuccess(document.getElementById("username"));
    }

    if (emailValue === '') {
        setError(document.getElementById("email"), 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(emailValue)) {
        setError(document.getElementById("email"), "Please enter a valid email address.");
        isValid = false;
    } else {
        setSuccess(document.getElementById("email"));
    }

    if(passwordValue === '') {
        setError(document.getElementById("password"), 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8 ) {
        setError(document.getElementById("password"), 'Password must be at least 8 character.');
        isValid = false;
    } else {
        setSuccess(document.getElementById("password"));
    }

    if(password2Value === '') {
        setError(document.getElementById("repeat_password"), 'Please confirm your password');
        isValid = false;
    } else if (password2Value !== password) {
        setError(document.getElementById("repeat_password"), "Passwords doesn't match");
        isValid = false;
    } else {
        setSuccess(document.getElementById("repeat_password"));
    }

    

    return isValid;
}

form.addEventListener('submit', e => {
    if (!validateForm()) {
        e.preventDefault();
    } 
});
