# Juego de Adivinanza

Este proyecto es un sencillo juego de adivinanza de números desarrollado en HTML y JavaScript. El objetivo del juego es adivinar un número secreto generado aleatoriamente entre 1 y 100. El jugador recibe pistas para adivinar si el número es mayor o menor que su conjetura. Este proyecto tiene como finalidad cumplir con la primera entrega del proyecto de JavaScript del curso de Coderhouse.

## Estructura del Proyecto

El proyecto consiste en un único archivo HTML que contiene tanto la estructura de la página como el código JavaScript necesario para ejecutar el juego.

## Descripción del Código

### HTML

La estructura HTML incluye lo siguiente:

- Un título para la página (`<title>Juego de Adivinanza</title>`).
- Un encabezado principal (`<h1>Juego de Adivinanza</h1>`).
- Un botón para iniciar el juego (`<button onclick="startGame()">Iniciar Juego</button>`).

### JavaScript

El juego se basa en dos funciones principales y el uso de un bucle `while`.

#### Función `generateRandomNumber(min, max)`

Esta función genera un número aleatorio entre los valores `min` y `max` (ambos inclusive).

```javascript
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Función checkGuess(userNumber, secretNumber)

Esta función compara el número introducido por el usuario (userNumber) con el número secreto (secretNumber). Dependiendo de la comparación, muestra una alerta indicando si el número secreto es mayor, menor o si el usuario adivinó correctamente.

function checkGuess(userNumber, secretNumber) {
    if (userNumber < secretNumber) {
        alert("El número secreto es mayor. ¡Intenta de nuevo!");
        return false;
    } else if (userNumber > secretNumber) {
        alert("El número secreto es menor. ¡Intenta de nuevo!");
        return false;
    } else {
        alert("¡Felicitaciones! Adivinaste el número.");
        return true;
    }
}
```
### Función startGame()
```
Esta función inicia el juego. Genera un nuevo número secreto y utiliza un bucle while para continuar solicitando al usuario que adivine el número hasta que lo adivine correctamente.
```

let secretNumber;
let guessed;

function startGame() {
    // Generar un nuevo número secreto
    secretNumber = generateRandomNumber(1, 100);
    guessed = false;

    while (!guessed) {
        const userNumber = parseInt(prompt("Adivina el número entre 1 y 100:"));

        if (isNaN(userNumber)) {
            alert("Por favor, ingresa un número válido.");
            continue;
        }
        guessed = checkGuess(userNumber, secretNumber);
    }
}
```
Ciclo while

El ciclo while dentro de startGame() es fundamental para el funcionamiento del juego. Permite que el juego continúe solicitando al usuario nuevas conjeturas hasta que se adivine correctamente el número secreto.
```
while (!guessed) {
    const userNumber = parseInt(prompt("Adivina el número entre 1 y 100:"));

    if (isNaN(userNumber)) {
        alert("Por favor, ingresa un número válido.");
        continue;
    }
    guessed = checkGuess(userNumber, secretNumber);
}

### Cómo Jugar

   - Abre el archivo HTML en tu navegador web.
   - Haz clic en el botón "Iniciar Juego".
   - Introduce un número entre 1 y 100 cuando se te pida.
   - Sigue las pistas proporcionadas hasta adivinar el número secreto.


### Conclusión

Este sencillo juego de adivinanza demuestra el uso de funciones y ciclos en JavaScript para crear una experiencia interactiva para el usuario. Es una excelente manera de practicar la lógica de programación y la interacción con el usuario mediante alertas y prompts. Además, este proyecto cumple con los requisitos de la primera entrega del curso de JavaScript en Coderhouse.