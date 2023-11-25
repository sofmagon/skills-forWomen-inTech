/* Interés compuesto de una cuenta bancaria.-

Se ha depositado una cantidad específica de dinero (deposit), cada año el saldo incrementa a la misma tasa de crecimiento (rate).
Calcular cuánto tiempo le tomaría al saldo superar un umbral específico (threshold).

- Ejemplo, para:
deposit = 100;
rate = 20;
threshold = 170;

- La salida debe ser:
depositProfit(deposit, rate, threshold) = 3;

Cada año la cantidad de dinero en la cuenta crece 20%, quedando en 3 años de la siguiente forma:

year 0: 100
year 1: 120
year 2: 144
year 3: 172.8

Es decir, tomaría 3 años alcanzar el objetivo.
*/

function depositProfit(deposit, rate, threshold) {
    let yearCount = 0;
    const growthRate = rate * 0.01;

    // Ciclo que de mientras que el dinero depositado sea menor que el umbral deseado
    while (deposit < threshold) {
        // Calcular el interés que se gana en cada iteración
        let interest = deposit * growthRate;

        console.log(`Actualmente en la cuenta: ${deposit}`);

        // Sumar el interés al valor del depósito
        deposit = deposit + interest;
        // Aumentar el año transcurrido
        yearCount++;
    }

    console.log(`Actualmente en la cuenta: ${deposit}`);
    return yearCount;
}

console.log(depositProfit(10000, 6, 15000));
