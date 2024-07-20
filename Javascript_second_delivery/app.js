// Array to hold pizza toppings
let toppings = [];

// Function to add a topping
function addTopping(topping) {
    if (topping) {
        toppings.push(topping);
        alert(`Added topping: ${topping}`);
    } else {
        alert('Please enter a topping.');
    }
}

// Function to remove a topping
function removeTopping(topping) {
    const index = toppings.indexOf(topping);
    if (index !== -1) {
        toppings.splice(index, 1);
        alert(`Removed topping: ${topping}`);
    } else {
        alert(`Topping not found: ${topping}`);
    }
}

// Function to show all toppings
function showToppings() {
    if (toppings.length > 0) {
        alert('Current toppings: ' + toppings.join(', '));
    } else {
        alert('No toppings available.');
    }
}

// Function to sort toppings
function sortToppings() {
    toppings.sort();
    alert('Toppings sorted: ' + toppings.join(', '));
}

// Function to reverse toppings
function reverseToppings() {
    toppings.reverse();
    alert('Toppings reversed: ' + toppings.join(', '));
}

// Function to clear all toppings
function clearToppings() {
    toppings = [];
    alert('All toppings cleared.');
}
