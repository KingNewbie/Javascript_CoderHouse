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
