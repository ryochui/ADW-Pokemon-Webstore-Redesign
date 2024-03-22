const cards = document.querySelectorAll('.card');

        // Add click event listener to each card
        cards.forEach(card => {
            card.addEventListener('click', function() {
                // Get the URL of the card's link
                const link = this.dataset.link;
                // Navigate to the URL
                window.location.href = link;
            });
        });