document.addEventListener("DOMContentLoaded", function() {
    var quantityButtons = document.querySelectorAll(".quantity-btn");

    quantityButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var quantityCircle = this.parentElement.querySelector(".quantity-circle");

            var currentQuantity = parseInt(quantityCircle.innerText);

            if (this.textContent === "+") {
                currentQuantity++;
            } else if (this.textContent === "-" && currentQuantity > 1) {
                currentQuantity--;
            }

            quantityCircle.innerText = currentQuantity;

            updateTotalPrice(this.closest(".item-row"));

            updateSubtotal();
        });
    });

    var removeButtons = document.querySelectorAll(".remove-btn");

    removeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var itemRow = this.closest(".item-row");
            itemRow.parentNode.removeChild(itemRow);

            updateSubtotal();
        });
    });

    function updateTotalPrice(itemRow) {
        var priceElement = itemRow.querySelector(".item-price");
        var quantityElement = itemRow.querySelector(".quantity-circle");
        var totalElement = itemRow.querySelector(".item-total");

        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = parseInt(quantityElement.innerText);

        var totalPrice = price * quantity;

        totalElement.innerText = "$" + totalPrice.toFixed(2);
    }

    function updateSubtotal() {
        var items = document.querySelectorAll(".item-total");
        var subtotalValue = 0;
        items.forEach(function(item) {
            subtotalValue += parseFloat(item.innerText.replace("$", ""));
        });
        document.querySelector(".subtotal").innerText = "$" + subtotalValue.toFixed(2);

        if (subtotalValue === 0) {
            document.querySelector(".service-fee").innerText = "$0.00";
        }

        updateGrandTotal(subtotalValue);
    }

    function updateGrandTotal(subtotal) {
        var serviceFee = parseFloat(document.querySelector(".service-fee").innerText.replace("$", ""));
        var taxIncluded = parseFloat(document.querySelector(".tax-included").innerText.replace("$", ""));
        var grandTotalValue = subtotal + serviceFee + taxIncluded;
        document.querySelector(".grand-total").innerText = "$" + grandTotalValue.toFixed(2);
    }

    updateSubtotal();
});
