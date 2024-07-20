// Main menu loop
function mainMenu() {
    let exit = false;
    while (!exit) {
        const choice = prompt(`Please choose an option:
1. Add a topping
2. Remove a topping
3. Show all toppings
4. Sort toppings
5. Reverse toppings
6. Clear all toppings
7. Exit`);
        
        switch (choice) {
            case '1':
                const toppingToAdd = prompt('Enter a topping to add:');
                addTopping(toppingToAdd);
                break;
            case '2':
                const toppingToRemove = prompt('Enter a topping to remove:');
                removeTopping(toppingToRemove);
                break;
            case '3':
                showToppings();
                break;
            case '4':
                sortToppings();
                break;
            case '5':
                reverseToppings();
                break;
            case '6':
                clearToppings();
                break;
            case '7':
                exit = true;
                break;
            default:
                alert('Invalid option, please try again.');
                break;
        }
    }
}

// Start the menu loop
mainMenu();
