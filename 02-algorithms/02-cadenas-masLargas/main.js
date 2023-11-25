// Las cadenas más largas

const inputArray = ['sofy', 'pilar', 'roberto', 'matias', 'fernando'];

function all_longestStrings(inputArray) {
    // Variable que almacena el tamaño de la cadena más larga
    let longestSize = -1;
    // Array que almacena la solución
    const result = [];

    // 1. Encontrar el tamaño más grande iterando sobre el array
    for (let i = 0; i < inputArray.length; i++) {
        // Si el tamaño de la palabra en la posición actual es superior a la variable
        if (inputArray[i].length > longestSize) {
            // Asignarlo
            longestSize = inputArray[i].length;
        }
    }

    // 2. Guardar las palabras con base en el tamaño
    for (let i = 0; i < inputArray.length; i++) {
        // Si el tamaño de la palabra en la posición actual es estrictamente igual a la variable
        if (inputArray[i].length === longestSize) {
            // Agregarlo al array de la solución
            result.push(inputArray[i]);
        }
    }

    return result;
}

console.log(all_longestStrings(inputArray));
