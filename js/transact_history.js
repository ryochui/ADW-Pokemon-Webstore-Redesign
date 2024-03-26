document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const transactions = document.querySelectorAll(".transaction");

    let currentPage = 0;
    const transactionsPerPage = 2; // Number of transactions to display per page

    // Show initial page
    showPage(currentPage);

    // Event listeners for previous and next buttons
    prevBtn.addEventListener("click", function() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextBtn.addEventListener("click", function() {
        if (currentPage < Math.ceil(transactions.length / transactionsPerPage) - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Function to show specific page
    function showPage(page) {
        const startIndex = page * transactionsPerPage;
        const endIndex = startIndex + transactionsPerPage;

        transactions.forEach((transaction, index) => {
            if (index >= startIndex && index < endIndex) {
                transaction.style.display = "block";
            } else {
                transaction.style.display = "none";
            }
        });

        // Update button visibility based on current page
        if (currentPage === 0) {
            prevBtn.style.display = "none";
            nextBtn.style.display = "block";
        } else if (currentPage === Math.ceil(transactions.length / transactionsPerPage) - 1) {
            prevBtn.style.display = "block";
            nextBtn.style.display = "none";
        } else {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        }
    }

    // Function to handle edit button click for existing billing options
    function handleEditButtonClick() {
        const billingOption = this.closest(".billing-option");
        const hiddenRows = billingOption.querySelectorAll(".billing-row.hidden:not(:first-child)");
        if (hiddenRows.length > 0) {
            hiddenRows.forEach(row => {
                row.classList.remove("hidden");
            });
        } else {
            const allRows = billingOption.querySelectorAll(".billing-row:not(:first-child)");
            allRows.forEach(row => {
                row.classList.add("hidden");
            });
        }
    }

    // Function to handle edit button click for new billing options
    function handleNewEditButtonClick() {
        const billingOption = this.closest(".billing-option");
        const hiddenRows = billingOption.querySelectorAll(".billing-row.hidden:not(:first-child)");
        if (hiddenRows.length > 0) {
            hiddenRows.forEach(row => {
                row.classList.remove("hidden");
            });
        } else {
            const allRows = billingOption.querySelectorAll(".billing-row:not(:first-child)");
            allRows.forEach(row => {
                row.classList.add("hidden");
            });
        }
    }

    // Function to handle save button click for existing billing options
    function handleSaveButtonClick() {
        const billingOption = this.closest(".billing-option");
        const allRows = billingOption.querySelectorAll(".billing-row:not(:first-child)");
        allRows.forEach(row => {
            row.classList.add("hidden");
        });
    }

    // Function to handle save button click for new billing options
    function handleNewSaveButtonClick() {
        const billingOption = this.closest(".billing-option");
        const cardTypeSelect = billingOption.querySelector(".card-type select");
        const cardType = cardTypeSelect ? cardTypeSelect.value : null; // Check if cardTypeSelect is null
    
        console.log("Selected card type:", cardType); // Log selected card type
    
        if (cardType) {
            // Update card title with selected card type
            let cardTitle = billingOption.querySelector(".card-title");
            if (!cardTitle) {
                // Create and append card title element
                cardTitle = document.createElement("div");
                cardTitle.classList.add("card-title");
                billingOption.insertBefore(cardTitle, billingOption.querySelector(".added-date"));
            }
            cardTitle.textContent = cardType.charAt(0).toUpperCase() + cardType.slice(1); // Set card title without "ending in XXXX"
    
            // Update added date
            const addedDate = billingOption.querySelector(".added-date");
            const currentDate = new Date();
            addedDate.textContent = (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear().toString().substr(-2);
        }
    
        // Hide additional rows
        const allRows = billingOption.querySelectorAll(".billing-row:not(:first-child)");
        allRows.forEach(row => {
            row.classList.add("hidden");
        });
    }

    // Function to handle removal of billing option
    function removeBillingOption() {
        const billingOptions = document.querySelectorAll(".billing-option");
        if (billingOptions.length > 1) {
            this.closest(".billing-option").remove();
        } else {
        alert("At least one billing option must exist.");
        }
    }

    // Event listeners for edit buttons of existing billing options
    document.querySelectorAll(".edit-btn").forEach(button => {
        button.addEventListener("click", handleEditButtonClick);
    });

    // Event listeners for save buttons of existing billing options
    document.querySelectorAll(".save-btn").forEach(button => {
        button.addEventListener("click", handleSaveButtonClick);
    });

    // Event listeners for remove buttons of existing billing options
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", removeBillingOption);
    });

    // Event listener for save button in new billing option section
    const newBillingOption = document.querySelector(".new-billing-option");
    const saveButton = newBillingOption.querySelector(".save-new");
    // Event listener for save button in new billing option section
    saveButton.addEventListener("click", function() {
        // Get selected card type
        const cardTypeSelect = newBillingOption.querySelector(".card-type select");
        const cardType = cardTypeSelect ? cardTypeSelect.value : null; // Check if cardTypeSelect is null

        if (cardType) {
            // Duplicate existing billing option
            const existingBillingOption = document.querySelector(".billing-option");
            const billingOption = existingBillingOption.cloneNode(true);
            
            // Update card logo and title based on selected card type
            const cardLogo = billingOption.querySelector(".card-logo img"); // Get the img element
            const logoPath = getCardLogoPath(cardType);
            console.log("Logo path:", logoPath); // Log logo path
            cardLogo.src = logoPath; // Set the src attribute with the logo path
            cardLogo.alt = cardType; // Set alt attribute for accessibility

            // Update card title without "ending in XXXX"
            const cardTitle = billingOption.querySelector(".card-title");
            cardTitle.textContent = cardType.charAt(0).toUpperCase() + cardType.slice(1); 

            // Update added date
            const addedDate = billingOption.querySelector(".added-date");
            const currentDate = new Date();
            addedDate.textContent = (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear().toString().substr(-2);

            // Append new billing option to the DOM
            const billingInformation = document.querySelector(".billing-information");
            billingInformation.insertBefore(billingOption, newBillingOption);

            // Event listener for edit button of new billing option
            const editBtn = billingOption.querySelector(".edit-btn");
            editBtn.addEventListener("click", handleNewEditButtonClick);

            // Event listener for save button of new billing option
            const newSaveBtn = billingOption.querySelector(".save-btn");
            newSaveBtn.addEventListener("click", handleNewSaveButtonClick);

            // Event listener for remove button of new billing option
            const removeBtn = billingOption.querySelector(".remove-btn");
            removeBtn.addEventListener("click", removeBillingOption);
        }
    });


    // Show/hide additional rows in new billing option section
    const newBillingRows = newBillingOption.querySelectorAll(".billing-row");
    newBillingRows.forEach((row, index) => {
        // Show first row, hide the rest
        if (index !== 0) {
            row.classList.add("hidden");
        }
    });

    // Function to get the path of the card logo based on card type
    function getCardLogoPath(cardType) {
        // Define an object with card types as keys and corresponding logo paths as values
        const logoPaths = {
            "Visa": "../assets/cards/visa.png",
            "MasterCard": "../assets/cards/mastercard.jpg",
            "UnionBank": "../assets/cards/unionbank.png",
            "BPI":"../assets/cards/bpi.png"
        };
        
        console.log("Selected card type:", cardType); // Log selected card type
    
        // Return the logo path for the given card type, or a default path if not found
        const logoPath = logoPaths[cardType] || "path/to/default_logo.png";
        console.log("Logo path:", logoPath); // Log logo path
    
        return logoPath;
    }
});
