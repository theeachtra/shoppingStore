// Show Cart
$(document).ready(function () {
    

(function () {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart');
    });
})();

// add items to the cart

(function () {

    // const cartBtn = document.querySelectorAll('#product-list');

    // cartBtn.forEach(function (btn) {
    //     btn.addEventListener("click", function(event) {

    //         console.log(event.target);
    //     });
    // });


})();

});