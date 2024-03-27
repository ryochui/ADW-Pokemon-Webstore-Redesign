const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');

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

function validateForm1() {
    let isValid = true;

    const ign = document.getElementById("ign").value.trim();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(ign === '') {
        setError(document.getElementById("ign"), 'IGN is required');
        isValid = false;
    } else {
        setSuccess(document.getElementById("ign"));
    }

    return isValid;
}

function validateForm2() {
    let isValid = true;

    const email1 = document.getElementById("email1").value.trim();
    const email2 = document.getElementById("email2").value.trim();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(email2 === '') {
        setError(document.getElementById("email2"), 'Please confirm your email');
        isValid = false;
    } else if (email2 !== email1) {
        setError(document.getElementById("email2"), "Emails doesn't match");
        isValid = false;
    } else {
        setSuccess(document.getElementById("email2"));
        if (email1 === '') {
            setError(document.getElementById("email1"), 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email1)) {
            setError(document.getElementById("email1"), "Please enter a valid email address.");
            isValid = false;
        } else {
            setSuccess(document.getElementById("email1"));
        }
    }

    return isValid;
}

function validateForm3() {
    let isValid = true;

    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(pass2 === '') {
        setError(document.getElementById("pass2"), 'Please confirm your password');
        isValid = false;
    } else if (pass2 !== pass1) {
        setError(document.getElementById("pass2"), "Passwords doesn't match");
        isValid = false;
    } else {
        setSuccess(document.getElementById("pass2"));
        if (pass1 === '') {
            setError(document.getElementById("pass1"), 'Password is required');
            isValid = false;
        } else if (pass1.length < 8) {
            setError(document.getElementById("pass1"), "Password must be at least 8 characters.");
            isValid = false;
        } else {
            setSuccess(document.getElementById("pass1"));
        }
    }

    return isValid;
}

form1.addEventListener('submit', e => {
    e.preventDefault();
    validateForm1() 
});

form2.addEventListener('submit', e => {
    e.preventDefault();

    validateForm2()
});

form3.addEventListener('submit', e => {
    e.preventDefault();

    validateForm3()
});
