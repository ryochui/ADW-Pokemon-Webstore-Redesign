document.addEventListener('DOMContentLoaded', function() {
    // Pagination buttons
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    // Cards container and cards
    const cardsContainer = document.querySelector('.cards-container');
    const cards = cardsContainer.querySelectorAll('.card');

    // Number of cards per page and current page index
    const cardsPerPage = 4;
    let currentPage = 0;

    // Function to show cards for current page
    function showPage(page) {
        const startIndex = page * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Show initial page
    showPage(currentPage);

    // Function to handle next page
    function nextPage() {
        currentPage++;
        if (currentPage >= Math.ceil(cards.length / cardsPerPage)) {
            currentPage = 0; // Loop back to first page if reached end
        }
        showPage(currentPage);
    }

    // Function to handle previous page
    function prevPage() {
        currentPage--;
        if (currentPage < 0) {
            currentPage = Math.ceil(cards.length / cardsPerPage) - 1; // Loop back to last page if reached start
        }
        showPage(currentPage);
    }

    // Event listeners for pagination buttons
    nextButton.addEventListener('click', nextPage);
    prevButton.addEventListener('click', prevPage);
});

document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.cart-button');
    const popupCard = document.getElementById('popup-card');

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get product details from the clicked card
            const card = this.closest('.card');
            const itemName = card.querySelector('.title').textContent;
            const itemIcon = card.querySelector('img').getAttribute('src');

            // Update the content of the popup card using template literal
            popupCard.innerHTML = `
                <div class="popup-header">
                    <img src="${itemIcon}" alt="${itemName}" class="popup-item-icon">
                    <h2 class="popup-item-name">${itemName}</h2>
                </div>
                <p class="popup-message">Item added to cart!</p>
                <button class="close-button">Close</button>
            `;

            // Display the popup card
            popupCard.style.display = 'block';

            // Add event listener to the close button inside the popup card
            const closeButton = popupCard.querySelector('.close-button');
            closeButton.addEventListener('click', function() {
                // Hide the popup card when the close button is clicked
                popupCard.style.display = 'none';
            });
        });
    });
});

