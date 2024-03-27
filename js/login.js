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

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email === '') {
        setError(document.getElementById("email"), 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        setError(document.getElementById("email"), "Please enter a valid email address.");
        isValid = false;
    } else {
        setSuccess(document.getElementById("email"));
    }

    if (password === '') {
        setError(document.getElementById("password"), 'Password is required');
        isValid = false;
    } else if (password.length < 8 ) {
        setError(document.getElementById("password"), 'Password must be at least 8 character.')
        isValid = false;
    } else {
        setSuccess(document.getElementById("password"));
    }

    

    return isValid;
}

form.addEventListener('submit', e => {
    if (!validateForm()) {
        e.preventDefault();
    } 
});
