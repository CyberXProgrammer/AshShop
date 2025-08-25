let cart = [];
let cartCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadSection('home');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            loadSection(section);
            navMenu.classList.remove('active');
        });
    });
});

function loadSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
    if (sectionId === 'cart') updateCart();
}

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert(`${itemName} added to cart!`);
    if (document.querySelector('#cart').classList.contains('active')) {
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Your cart is empty.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });
    }
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function processPayment() {
    const paymentMethod = document.getElementById('payment-method').value;
    if (cart.length === 0) {
        document.getElementById('payment-status').textContent = 'Cart is empty!';
        return;
    }
    document.getElementById('payment-status').textContent = `Payment of $${document.getElementById('cart-total').textContent} successful via ${paymentMethod}!`;
    cart = [];
    cartCount = 0;
    document.getElementById('cart-count').textContent = cartCount;
    updateCart();
    setTimeout(() => {
        loadSection('home');
    }, 2000);
}
