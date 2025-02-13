// var a,b,total;
// a = parseFloat(prompt("Introduce el primer número"));
// b = parseFloat(prompt("Introduce el segundo número"));
// total = a + b;
// alert("La suma de los dos números es: " + total);
document.getElementById("sumarjs").addEventListener("submit", function (event) {
    event.preventDefault();
    var a = parseFloat(document.getElementById("number1").value);
    var b = parseFloat(document.getElementById("number2").value);
    var total = a + b;
    document.getElementById("resultado").textContent = "La suma de los numeros ingresados es: " + total;
});