const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', event => {
    console.log(event.target.previousElementSibling.textContent);
    console.log('Product added to cart');
  });
});
