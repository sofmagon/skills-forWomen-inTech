// Representación de las reinas en el espacio
class QueenPosition {
    constructor(rowIndex, columnIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
    }

    get leftDiagonal() {
        return this.rowIndex - this.columnIndex;
    }

    get rightDiagonal() {
        return this.rowIndex + this.columnIndex;
    }
}

// Función encargada de evaluar si una reina está siendo atacada por otra
function isSafe(queensPositions, rowIndex, columnIndex) {
    // Crear una nueva instancia de la clase, una nueva reina.
    const newQueenPosition = new QueenPosition(rowIndex, columnIndex);

    // Iterar sobre las reinas para comparar las reinas existentes contra la nueva reina y así saber si alguna está en posición de ataque
    for (let queenIndex = 0; queenIndex < queensPositions.length; queenIndex++) {
        // Obtener la posición de cada reina
        const currentQueenPosition = queensPositions[queenIndex];

        // Evaluar si la nueva reina está en posición de amenaza o es libre
        if (currentQueenPosition && (newQueenPosition.columnIndex === currentQueenPosition.columnIndex || newQueenPosition.rowIndex === currentQueenPosition.rowIndex || newQueenPosition.leftDiagonal === currentQueenPosition.leftDiagonal || newQueenPosition.rightDiagonal === currentQueenPosition.rightDiagonal)) {
            // No es seguro colocar la nueva reina
            return false;
        }
    }

    // Sí es seguro colocar la nueva reina
    return true;
}

// Pruebas. Visualizando posiciones y evaluando
queen = new QueenPosition(1, 2);
const result = isSafe([queen], 3, 3);
console.log(result);

// Saber si todas las posiciones de las reinas ya no son nulas, el array no está vacío
function allQueenSet(queensPositions) {
    return queensPositions.every(position => position !== null);
}

// Operación recursiva que permitirá recorrer todo el tablero
function nQueensRecursive(solutions, previousQueensPositions, queensCount, columnIndex) {
    const queenPositions = [...previousQueensPositions].map(queenPosition => {
        return !queenPosition ? queenPosition : new QueenPosition(queenPosition.rowIndex, queenPosition.columnIndex);
    });

    if (allQueenSet(queenPositions)) {
        solutions.push(queenPositions);
        return true;
    }

    // Ciclo que confirma si se puede colocar una reina en la fila y columna dadas
    for (let rowIndex = 0; rowIndex < queensCount; rowIndex++) {
        if (isSafe(queenPositions, rowIndex, columnIndex)) {
            // Agregar al array de queenPositions, una nueva reina
            queenPositions[rowIndex] = new QueenPosition(rowIndex, columnIndex);

            nQueensRecursive(solutions, queenPositions, queensCount, columnIndex + 1);

            // Dando un paso hacia atrás de ser necesario y seguir probando otras posibles soluciones
            queenPositions[rowIndex] = null;
        }
    }

    return false;
}

function nQueens(queensCount) {
    // Arreglo para probar saber si las reinas serán válidas
    const queensPositions = Array(queensCount).fill(null);

    // Arreglo que guarda toda las posibles soluciones
    const solutions = [];

    nQueensRecursive(solutions, queensPositions, queensCount, 0);
    return solutions;
}

const results = nQueens(8);
console.log(results.length);
console.log(results);
