// Selecciona el elemento de entrada (display) donde se mostrarán los resultados
const display = document.querySelector('#display');

// Selecciona todos los botones de la calculadora
const buttons = document.querySelectorAll('button');

// Itera sobre cada botón y añade un evento de clic
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Si el botón es el de igual ("="), calcula el resultado de la expresión
        if (btn.id === "=") {
            try {
                // Reemplaza el símbolo de porcentaje (%) con la operación de porcentaje
                let expression = display.value.replace(/(\d+(\.\d+)?)%/g, (match, p1) => {
                    return `(${p1}/100)*${p1}`;
                });
                // Evalúa la expresión y muestra el resultado en el display
                display.value = eval(expression);
            } catch (e) {
                // Si hay un error en la evaluación, muestra "Error" en el display
                display.value = "Error";
            }
        } else if (btn.id === "ac") {
            // Si el botón es "ac", limpia el display
            display.value = "";
        } else if (btn.id === "de") {
            // Si el botón es "de", borra el último dígito del display
            display.value = display.value.slice(0, -1);
        } else if (btn.id === "porcentaje") {
            // Si el botón es "%", agrega el símbolo de porcentaje al display
            display.value += "%";
        } else if (btn.id === "raiz") {
            // Si el botón es "raiz", calcula la raíz cuadrada del valor en el display
            try {
                const value = parseFloat(display.value);
                if (!isNaN(value)) {
                    // Si el valor es un número válido, calcula la raíz cuadrada y la muestra en el display
                    display.value = Math.sqrt(value).toString();
                } else {
                    // Si el valor no es un número válido, muestra "Error" en el display
                    display.value = "Error";
                }
            } catch (e) {
                // Si hay un error en el cálculo, muestra "Error" en el display
                display.value = "Error";
            }
        } else if (btn.id === "e") {
            // Si el botón es "e", agrega el número de Euler (e) al display
            display.value += Math.E.toString();
        } else {
            // Para cualquier otro botón, agrega el valor del botón al display
            display.value += btn.id;
        }
    });
});