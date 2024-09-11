let ingredients = [];

async function loadIngredients() {
    try {
        const response = await fetch('ingredients.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        ingredients = await response.json();
        displayIngredientCards();
    } catch (error) {
        console.error('Error cargando ingredientes:', error);
    }
}

function displayIngredientCards() {
    const container = document.getElementById('ingredientCards');
    container.innerHTML = '';
    ingredients.forEach((ingredient, index) => {
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

function sortIngredients() {
    const option = document.getElementById('sortOptions').value;
    if (option === 'price') {
        ingredients.sort((a, b) => a.price - b.price);
    } else if (option === 'name') {
        ingredients.sort((a, b) => a.name.localeCompare(b.name));
    }
    displayIngredientCards();
}

// Función para agregar ingredientes al carrito
function addToCart(index) {
    const ingredient = ingredients[index];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(ingredient);
    localStorage.setItem('cart', JSON.stringify(cart));
    Swal.fire({
        title: '¡Añadido!',
        text: `${ingredient.name} ha sido añadido al carrito`,
        icon: 'success',
        confirmButtonText: 'Continuar'
    });
    updateCartCount();
}

// Función para actualizar la cantidad de elementos en el carrito
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Función para navegar a la página del carrito
function navigateToCart() {
    window.location.href = 'cart.html';
}

window.onload = () => {
    loadIngredients(); // Cargar los ingredientes al inicio
    updateCartCount(); // Actualizar el contador del carrito al cargar la página
};
