// Interés compuesto de una cuenta bancaria

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

console.log(depositProfit(100, 20, 170));
