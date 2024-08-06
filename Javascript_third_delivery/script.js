
const ingredients = [
    { name: 'Queso', price: 1000, img: 'img/queso.png' },
    { name: 'Tomate', price: 500, img: 'img/tomate.png' },
    { name: 'Pepperoni', price: 1200, img: 'img/pepperoni.png' },
    { name: 'Champiñones', price: 800, img: 'img/champinones.png' },
    { name: 'Aceitunas', price: 700, img: 'img/aceitunas.png' },
    { name: 'Jalapeños', price: 600, img: 'img/jalapenos.png' }, 
    { name: 'Pimiento', price: 400, img: 'img/pimiento.png' },
    { name: 'Cebolla', price: 300, img: 'img/cebolla.png' },
    { name: 'Jamon', price: 950, img: 'img/jamon.png' },
    { name: 'Piña', price: 550, img: 'img/pina.png' },
    { name: 'Tocino', price: 900, img: 'img/tocino.png' }
];


let cart = [];

function displayIngredientCards() {
    const container = document.getElementById('ingredientCards');
    container.innerHTML = ''; // Limpiar 
    console.log("Total de ingredientes:", ingredients.length); 
    ingredients.forEach((ingredient, index) => {
        console.log(`Mostrando ingrediente: ${ingredient.name}`); 
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${ingredient.img}" alt="${ingredient.name}" onerror="this.onerror=null;this.src='img/default.png';">
            <h3>${ingredient.name}</h3>
            <p>$${ingredient.price}</p>
            <button onclick="addToCart(${index})">Agregar al carrito</button>
        `;
        container.appendChild(card);
    });
}


function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        console.log('Carrito cargado:', cart); 
    } else {
        cart = [];
        console.log('No hay carrito guardado en localStorage.');
    }
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Carrito guardado:', cart); 
}


function addToCart(index) {
    const ingredient = ingredients[index];
    cart.push(ingredient);
    saveCartToLocalStorage();
    updateCartCount();
    alert(`${ingredient.name} añadido al carrito`);
}


function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const pizzaImage = document.getElementById('pizzaImage');
    cartItems.innerHTML = ''; 

    if (cart.length === 0) {
        cartItems.innerHTML = '<li>El carrito está vacío</li>';
        if (pizzaImage) pizzaImage.style.display = 'none'; 
    } else {
        if (pizzaImage) pizzaImage.style.display = 'block'; 
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.className = 'remove-btn';
            removeButton.onclick = () => removeFromCart(index);
            li.appendChild(removeButton);
            cartItems.appendChild(li);
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToLocalStorage();
    displayCartItems();
    updateCartCount();
}


function goBack() {
    window.history.back();
}

function navigateToCart() {
    window.location.href = 'cart.html';
}


window.onload = () => {
    loadCartFromLocalStorage();
    displayIngredientCards();
};
