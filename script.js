let cart = [];
let cartCount = 0;

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function showPayment() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('payment').classList.remove('hidden');
    document.getElementById('payment').classList.add('show');
}

function processPayment() {
    const paymentMethod = document.getElementById('payment-method').value;
    document.getElementById('payment-status').textContent = 'Successful Payment';
    cart = []; // Clear cart after payment
    cartCount = 0;
    document.getElementById('cart-count').textContent = cartCount;
    updateCart();
    document.getElementById('cart').style.display = 'block';
    document.getElementById('payment').classList.remove('show');
    document.getElementById('payment').classList.add('hidden');
}
