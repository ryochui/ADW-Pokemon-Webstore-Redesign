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
