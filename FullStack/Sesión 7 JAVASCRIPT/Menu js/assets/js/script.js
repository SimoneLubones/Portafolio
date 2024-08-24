//@ts-check
const numero1 = prompt("Ingrese el primer número.");
const numero2 = prompt("Ingrese el segundo número.");


if (numero1 !== null && numero2 !== null) {
    const num1 = Number(numero1);
    const num2 = Number(numero2);

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num1 > num2) {
            alert(`${num1} es mayor que ${num2}`);
        } else if (num1 < num2) {
            alert(`${num1} es menor que ${num2}`);
        } else {
            alert("Los números son iguales");
        }
    } else {
        alert("Debe escribir un número válido.");
    }
} else {
    alert("Debe escribir un número válido.");
}
