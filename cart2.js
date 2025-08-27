// Cart array to store products added to cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];  // Retrieve cart from localStorage (if exists)

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Function to update the cart display
function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  
  // Clear the existing cart list
  cartItemsList.innerHTML = '';
  
  // Calculate the total price
  let total = 0;
  
  // Display each item in the cart
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `Product SKU: ${item.product} - PKR ${item.price}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });
  
  // Update total price
  totalPrice.textContent = `Total: PKR ${total}`;
  
  // Save cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add product to cart
function addToCart(event) {
  const button = event.target;
  const productId = button.getAttribute('data-product');
  const productPrice = parseInt(button.getAttribute('data-price'), 10);
  
  // Add the product to the cart array
  cart.push({ product: productId, price: productPrice });
  
  // Update the cart display
  updateCart();
}

// Add event listeners to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', updateCart);

