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
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiryDate = document.getElementById("expiryDate").value.trim();
    const cvc = document.getElementById("cvc").value.trim();
    const cardholderName = document.getElementById("cardholderName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const cardNumberRegex = /^\d{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/(2[4-9]|[3-9][0-9])$/;
    const cvcRegex = /^\d{3}$/;
    const cardholderNameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/;
    const phoneNumberRegex = /^((\+[0-9]{2})|0)[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}$/;

    if (email === '') {
        setError(document.getElementById("email"), 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        setError(document.getElementById("email"), "Please enter a valid email address.");
        isValid = false;
    } else {
        setSuccess(document.getElementById("email"));
    }

    if (cardNumber === '') {
        setError(document.getElementById("cardNumber"), 'Card Number is required');
        isValid = false;
    } else if (!cardNumberRegex.test(cardNumber.replace(/\s+/g, ''))) {
        setError(document.getElementById("cardNumber"), "Please enter a valid credit card number.");
        isValid = false;
    } else {
        setSuccess(document.getElementById("cardNumber"));
    }

    if (expiryDate === '') {
        setError(document.getElementById("expiryDate"), 'Expiry Date is required');
        isValid = false;
    } else if (!expiryDateRegex.test(expiryDate)) {
        setError(document.getElementById("expiryDate"), "Please enter a valid expiry date in the format MM/YY.");
        isValid = false;
    } else {
        setSuccess(document.getElementById("expiryDate"));
    }

    if (cvc === '') {
        setError(document.getElementById("cvc"), 'CVC required');
        isValid = false;
    } else if (!cvcRegex.test(cvc)) {
        setError(document.getElementById("cvc"), "Please enter a valid CVC.");
        isValid = false;
    } else {
        setSuccess(document.getElementById("cvc"));
    }

    if (cardholderName === '') {
        setError(document.getElementById("cardholderName"), "Card Holder Name required");
        isValid = false;
    } else if (!cardholderNameRegex.test(cardholderName)) {
        setError(document.getElementById("cardholderName"), "Please enter a valid cardholder name.");
        isValid = false;
    } else {
        setSuccess(document.getElementById("cardholderName"));
    }

    // Validate phone number if provided
    if (phoneNumber !== '' && !phoneNumberRegex.test(phoneNumber)) {
        setError(document.getElementById("phoneNumber"), "Please enter a valid phone number.");
        isValid = false;
    } else {
        setSuccess(document.getElementById("phoneNumber"));
    }

    return isValid;
}

form.addEventListener('submit', e => {
    if (!validateForm()) {
        e.preventDefault();
    } 
});
