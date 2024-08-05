// Lista de ingredientes disponibles
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

// Array para almacenar los elementos del carrito
let cart = [];

// Función para mostrar las tarjetas de ingredientes en la página principal
function displayIngredientCards() {
    const container = document.getElementById('ingredientCards');
    container.innerHTML = ''; // Limpiar contenido previo
    console.log("Total de ingredientes:", ingredients.length); // Mostrar la cantidad total de ingredientes
    ingredients.forEach((ingredient, index) => {
        console.log(`Mostrando ingrediente: ${ingredient.name}`); // Debug
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


// Cargar el carrito desde localStorage al cargar la página
function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        console.log('Carrito cargado:', cart); // Verificar el contenido del carrito
    } else {
        cart = [];
        console.log('No hay carrito guardado en localStorage.');
    }
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    }
}

// Guardar el carrito en localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Carrito guardado:', cart); // Verificar lo que se guarda
}

// Función para añadir un ingrediente al carrito
function addToCart(index) {
    const ingredient = ingredients[index];
    cart.push(ingredient);
    saveCartToLocalStorage();
    updateCartCount();
    alert(`${ingredient.name} añadido al carrito`);
}

// Función para actualizar el conteo de elementos en el carrito
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Mostrar los elementos del carrito en la página del carrito
function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const pizzaImage = document.getElementById('pizzaImage');
    cartItems.innerHTML = ''; // Limpiar contenido previo

    if (cart.length === 0) {
        cartItems.innerHTML = '<li>El carrito está vacío</li>';
        if (pizzaImage) pizzaImage.style.display = 'none'; // Ocultar imagen de pizza si está definida
    } else {
        if (pizzaImage) pizzaImage.style.display = 'block'; // Mostrar imagen de pizza si está definida
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

// Función para eliminar un elemento del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToLocalStorage();
    displayCartItems();
    updateCartCount();
}

// Función para regresar a la página principal
function goBack() {
    window.history.back();
}

// Función para navegar al carrito
function navigateToCart() {
    window.location.href = 'cart.html';
}

// Cargar el carrito y los ingredientes al cargar la página
window.onload = () => {
    loadCartFromLocalStorage();
    displayIngredientCards();
};
