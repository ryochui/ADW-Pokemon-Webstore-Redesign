document.addEventListener('DOMContentLoaded', function() {
    // Select the add-to-cart button
    const addToCartButton = document.querySelector('.add-to-cart-button');

    // Add event listener to the add-to-cart button
    addToCartButton.addEventListener('click', () => {
        // Create a div element for the popup container
        const popupContainer = document.createElement('div');
        popupContainer.classList.add('popup-container');

        // Create a div element for the popup card
        const popupCard = document.createElement('div');
        popupCard.classList.add('popup-card');

        // Add item name and icon to the popup card
        const itemName = document.querySelector('.name').textContent;
        const itemIcon = document.querySelector('.listing-picture img').src;
        popupCard.innerHTML = `
            <div class="popup-header">
                <img src="${itemIcon}" alt="${itemName}" class="popup-item-icon">
                <h2 class="popup-item-name">${itemName}</h2>
            </div>
            <p class="popup-message">Item added to cart!</p>
            <button class="close-button">Close</button>
        `;

        // Append the popup card to the popup container
        popupContainer.appendChild(popupCard);

        // Append the popup container to the body
        document.body.appendChild(popupContainer);

        // Add event listener to the close button
        const closeButton = popupCard.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            popupContainer.remove(); // Remove the popup from the DOM
        });
    });
});

