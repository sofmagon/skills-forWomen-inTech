let num = 5;

// Recursividad
function f_recursivo(num) {
    return (num === 1 || num === 0) ? 1 : num * f_recursivo(num - 1);
}

/* Para el número deseado entrará directamente al else, de modo que quedará:

5 * factorial2(5 - 1) -> 5 * 24
4 * factorial2(4 - 1) -> 4 * 6
3 * factorial2(3 - 1) -> 3 * 2
2 * factorial2(2 - 1) -> 2 * 1
1

Regresa el 1 y vuelve a la función superior que la llamó quedando 2x1, el resultado se regresa y sube a la siguiente llamda a la función quedando 3x2, el resultado se regresa vuelve a subir... así sucesivamente */

console.log(`Factorial of ${num} is ${f_recursivo(num)}`);

// Iteración
function f_iterativo(num) {
    if (num < 0) {
        console.log('Factorial of negative num does not exist');
    } else if (num === 0) {
        return 1;
    } else {
        let fact = 1;
        while (num > 1) {
            fact *= num;
            num -= 1;
        }
        return fact;
    }
}

/* Partiendo desde n hasta 1, donde 1 será la variable acumuladora misma que aumentará de uno en uno hasta llegar a n.
Llevando en cada ciclo la multiplicación del número mismo por la variable acumuladora. */

console.log(`Factorial of ${num} is ${f_iterativo(num)}`);
