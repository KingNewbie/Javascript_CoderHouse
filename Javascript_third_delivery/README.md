# Pizza Toppings Manager 🍕

Este proyecto es una sencilla aplicación para personalizar pizzas desarrollada en HTML, CSS y JavaScript puro. El objetivo de la aplicación es permitir al usuario seleccionar ingredientes para crear su pizza personalizada, agregar los ingredientes al carrito, y ver el resumen de su pedido. Este proyecto es parte del curso de JavaScript en Coderhouse.

    Seleccionar Ingredientes: Los usuarios pueden elegir entre una variedad de ingredientes para personalizar su pizza.
    Carrito de Compras: Los ingredientes seleccionados se agregan a un carrito, que se almacena en localStorage.
    Visualización del Carrito: Los usuarios pueden ver su selección de ingredientes y eliminar elementos del carrito.
    Persistencia de Datos: El carrito se guarda en localStorage para que los datos persistan entre sesiones.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos:

    1.  index.html: Contiene la estructura de la página principal donde se seleccionan los ingredientes.
    2.  cart.html: Página donde se muestra el resumen de los ingredientes seleccionados.
    3.  styles.css: Contiene los estilos para la presentación de la aplicación.
    4.  script.js: Contiene la lógica para manejar los ingredientes y el carrito en JavaScript.
    5. ingredients.js: Contiene la lógica para manejar los ingredientes
    6.- cart.js: Contiene la lógica para manejar los lo que esta en el carrito.

## Instalación

1. **Clona el repositorio:**

    git clone https://github.com/KingNewbie/Javascript_CoderHouse/tree/main/Javascript_third_delivery

2. **Navega al directorio del proyecto:**

    ```bash
    cd Javascript_third_delivery
    ```
3. **Inicia un servidor local (opcional pero recomendado):**

    Fue necesario iniciar un servidor local para evitar problemas de CORS con `fetch` por tanto al indagar consegui iniciar uno de la siguiente dos maneras:

    - **Usando Python:**
    
      ```bash
      python3 -m http.server
      ```
      
    - **Usando Live Server en Visual Studio Code:**
    
      Instala la extensión Live Server y abre el proyecto con ella.

4. **Abre `index.html` en tu navegador:**

    ```bash
    http://localhost:8000
    ```
## Uso

    Abre index.html en tu navegador web favorito para iniciar la aplicación.
    Selecciona los ingredientes que deseas añadir a tu pizza y haz clic en "Agregar al carrito".
    Haz clic en el icono del carrito para ver los ingredientes seleccionados y gestionar tu pedido.

## Descripción del Código

### HTML

La estructura HTML incluye los siguientes elementos:

    Un título para la página <title>Pizza Customizer</title>.
    Inclusión de los archivos de JavaScript y CSS.
## index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito de Pizzas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="navbar">
        <div class="navbar-logo">
            <img src="img/logo.png" alt="Logo">
        </div>
        <div class="navbar-links">
            
        </div>
        <div class="navbar-cart" onclick="navigateToCart()">
            <img src="img/cart-icon.png" alt="Carrito">
            <div class="cart-count" id="cartCount">0</div>
        </div>
    </div>
    <h1>Elige tus Ingredientes</h1>
    <div class="container ingredient-container" id="ingredientCards">
        
    </div>

    <script src="script.js"></script>
</body>
</html>

```

### CSS

El archivo styles.css define la apariencia de la aplicación, incluyendo estilos para la barra de navegación, tarjetas de ingredientes, y el carrito.

## styles.css
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}

.navbar-logo img {
    height: 50px;
}

.navbar-links {
    display: flex;
    gap: 20px;
}

.navbar-links a {
    text-decoration: none;
    color: #555;
    font-weight: bold;
}

.navbar-links a:hover {
    color: #000;
}

.navbar-cart {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
}

.navbar-cart img {
    height: 30px;
}

.cart-count {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #ff5722;
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 14px;
}

.container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 0 20px;
}

/
.ingredient-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    width: calc(25% - 20px); 
    margin: 10px;
    padding: 10px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
    text-align: center;
    background-color: #fff;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.05);
}

.card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

.card h3 {
    margin: 15px 0 10px;
    font-size: 1.2em;
    color: #333;
}

.card p {
    margin: 10px 0;
    font-size: 1em;
    color: #777;
}

.card button {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
}

.card button:hover {
    background-color: #e64a19;
}

h1 {
    text-align: center;
    margin-top: 20px;
    color: #333;
}


.container.cart-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
}

ul.cart-items {
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
}

ul.cart-items li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

ul.cart-items li:last-child {
    border-bottom: none;
}

ul.cart-items .remove-btn {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

ul.cart-items .remove-btn:hover {
    background-color: #e64a19;
}

.pizza-image-container {
    text-align: center;
    margin-top: 20px;
}

.pizza-image {
    max-width: 100%;
    height: auto;
    display: none; 
}

.back-button {
    display: block;
    margin: 20px auto;
    background-color: #ddd;
    border: 1px solid #ccc;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
}

.back-button:hover {
    background-color: #ccc;
}


@media (max-width: 992px) {
    .card {
        width: calc(33.333% - 20px); 
    }
}

@media (max-width: 768px) {
    .card {
        width: calc(50% - 20px); 
    }
}

@media (max-width: 576px) {
    .card {
        width: 100%; 
        margin: 10px 0;
    }
}
```
### Javascript

## script.js
```javascript

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


```

## cart.js
```javascript
let cart = [];

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    updateCartCount();
    displayCartItems();
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const pizzaImage = document.getElementById('pizzaImage');
    cartItems.innerHTML = '';

    const cartSummary = cart.reduce((summary, item) => {
        const existingItem = summary.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            summary.push({ ...item, quantity: 1 });
        }
        return summary;
    }, []);

    if (cartSummary.length === 0) {
        cartItems.innerHTML = '<li>El carrito está vacío</li>';
        if (pizzaImage) pizzaImage.style.display = 'none';
    } else {
        if (pizzaImage) pizzaImage.style.display = 'block';
        cartSummary.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.className = 'remove-btn';
            removeButton.onclick = () => removeFromCart(item.name);
            li.appendChild(removeButton);
            cartItems.appendChild(li);
        });
    }
}

function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1); 
        saveCartToLocalStorage();
        displayCartItems();
        updateCartCount();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function goBack() {
    window.history.back();
}

function finalizePurchase() {
    Swal.fire({
        title: 'Compra finalizada',
        text: 'Gracias por tu compra!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
    cart = []; 
    saveCartToLocalStorage();
    displayCartItems(); 
    updateCartCount(); 
}

window.onload = () => {
    loadCartFromLocalStorage();
};

```
## ingredients.js
```javascript
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

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function navigateToCart() {
    window.location.href = 'cart.html';
}

window.onload = () => {
    loadIngredients(); 
    updateCartCount(); 
};

```
## Cómo Usar

    Abre el archivo index.html en tu navegador web.
    Selecciona los ingredientes que deseas añadir a tu pizza y haz clic en "Agregar al carrito".
    Haz clic en el icono del carrito para ver los ingredientes seleccionados y gestionar tu pedido.

## Conclusión

Esta aplicación sencilla de personalización de pizzas permite practicar la lógica de programación con JavaScript, así como el uso de funciones, manejo del DOM y almacenamiento en localStorage. Es una excelente manera de experimentar con la creación de una experiencia de usuario interactiva.