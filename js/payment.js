const payButton = document.getElementById('payButton');

// payButton.addEventListener('click', function() {
//     alert("You will be redirected to the corresponding payment center.");
// });

function validateForm() {
    let email = document.getElementById("email").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let expiryDate = document.getElementById("expiryDate").value;
    let cvc = document.getElementById("cvc").value;
    let cardholderName = document.getElementById("cardholderName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let cardNumberRegex = /^\d{16}$/;
    let expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    let cvcRegex = /^\d{3}$/;
    let cardholderNameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
    let phoneNumberRegex = /^((\+[0-9]{2})|0)[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!cardNumberRegex.test(cardNumber.replace(/\s+/g, ''))) {
        alert("Please enter a valid credit card number.");
        return false;
    }

    if (!expiryDateRegex.test(expiryDate)) {
        alert("Please enter a valid expiry date in the format MM/YY.");
        return false;
    }

    if (!cvcRegex.test(cvc)) {
        alert("Please enter a valid CVC.");
        return false;
    }

    if (!cardholderNameRegex.test(cardholderName)) {
        alert("Please enter a valid cardholder name.");
        return false;
    }

    // Only validate phone number if it's provided
    if (phoneNumber == '' || !phoneNumberRegex.test(phoneNumber)) {
        alert("Please enter a valid phone number starting with '09' or '+63' followed by 9 more digits.");
        return false;
    }

    window.location.href = "transact_history.html";
}


