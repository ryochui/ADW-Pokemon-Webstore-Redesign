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
    const username = document.getElementById("username");
    const pid = document.getElementById('playerID');
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("repeat_password");

    const usernameValue = username.value.trim();
    const pidValue = pid.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;
    const password2Value = password2.value;
    
    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(username.value === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if(pidValue === '') {
        setError(pid, 'Player ID is required');
        isValid = false;
    }else {
        setSuccess(pid);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(emailValue)) {
        setError(email, "Please enter a valid email address.");
        isValid = false;
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(document.getElementById('password'), 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8 ) {
        setError(document.getElementById('password'), 'Password must be at least 8 character.');
        isValid = false;
    } else {
        setSuccess(document.getElementById('password'));
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        isValid = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        isValid = false;
    } else {
        setSuccess(password2);
    }

    

    return isValid;
}

form.addEventListener('submit', e => {
    if (!validateForm()) {
        e.preventDefault();
    } 
});

var pid = document.getElementById('playerID');
pid.addEventListener('focus', function() {
    pid.value = '3201 1192 2365';
    pid.disabled = true;    
});


