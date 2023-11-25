/* Distancia de Levenshtein.-
*/

function levenshteinDistance(a, b) {
    // Crear una matriz vacía
    const distanceMatrix = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(null));

    // Rellenar la 1er fila
    for (let i = 0; i <= b.length; i++) {
        distanceMatrix[0][i] = i;
    }

    // Rellenar la primer columna
    for (let j = 0; j <= a.length; j++) {
        distanceMatrix[j][0] = j;
    }

    // Hacer el cálculo de las distancias
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
            distanceMatrix[i][j] = Math.min(
                distanceMatrix[i][j - 1] + 1, // inserción
                distanceMatrix[i - 1][j] + 1, // borrado
                distanceMatrix[i - 1][j - 1] + indicator, // reemplazar o nada
            );
        }
    }

    console.log(distanceMatrix);

    // Regresar el último valor de la matriz
    return distanceMatrix[a.length][b.length];
}

console.log(levenshteinDistance('casas', 'cosa'));
