# Pizza Toppings Manager

Este proyecto es una sencilla aplicación para gestionar toppings de pizza desarrollada en HTML y JavaScript. El objetivo de la aplicación es permitir al usuario agregar, eliminar, mostrar, ordenar, invertir y limpiar una lista de toppings de pizza. Este proyecto tiene como finalidad cumplir con los requisitos de la segunda entrega del proyecto de JavaScript del curso de Coderhouse.

## Estructura del Proyecto

El proyecto consiste en tres archivos:

1. index.html: Contiene la estructura de la página.
2. app.js: Contiene la lógica para manejar los toppings de pizza en JavaScript.
3. main.js: Contiene la lógica del menú interactivo en JavaScript.

## Descripción del Código

### HTML

La estructura HTML incluye lo siguiente:

- Un título para la página (<title>Pizza Toppings Manager</title>).
- La inclusión de los archivos de JavaScript (app.js y main.js).

### index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Adivinanza</title>
    <script src="app.js" defer></script>
</head>
<body>
    <h1>Juego de Adivinanza</h1>
    <button onclick="startGame()">Iniciar Juego</button>
</body>
</html>
```
### JavaScript

La aplicación se basa en varias funciones principales y el uso de un bucle `while` para el menú interactivo.

### app.js
Este archivo contiene las funciones necesarias para gestionar los toppings de pizza:

- addTopping(topping): Agrega un topping a la lista.
- removeTopping(topping): Elimina un topping de la lista.
- showToppings(): Muestra todos los toppings actuales.
- sortToppings(): Ordena los toppings alfabéticamente.
- reverseToppings(): Invierte el orden de los toppings.
- clearToppings(): Limpia todos los toppings de la list

```javascript
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
```

### main.js

Este archivo contiene la lógica del menú interactivo:

    - mainMenu(): Presenta un menú al usuario y llama a las funciones adecuadas según la elección del usuario. Utiliza un bucle `while` para mantener al usuario en el menú hasta que elija salir.
```javascript
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
```

## Cómo Usar

Abre el archivo index.html en tu navegador web.
La aplicación comenzará automáticamente y mostrará un menú de opciones.
Introduce el número correspondiente a la opción que deseas realizar y sigue las instrucciones proporcionadas.
Para salir de la aplicación, selecciona la opción 7. Exit.

## Conclusión

Esta sencilla aplicación de gestión de toppings de pizza demuestra el uso de funciones y ciclos en JavaScript para crear una experiencia interactiva para el usuario. Es una excelente manera de practicar la lógica de programación y la interacción con el usuario mediante alert() y prompt(). Además, este proyecto cumple con los requisitos del curso de JavaScript en Coderhouse.