// El 1er elemento duplicado.-

function firstDuplicate(a) {
    // Objeto vacío para ir agregando en key:value, el número visitado en la iteración. (numero:true)
    let dict = {};
    // Si vuelve a aparecer el número en la iteración, se asignará a la variable result
    let result = -1;

    // Iterando sobre el array
    for (let i = 0; i < a.length; i++) {
        // En cada iteración se obtiene el elemento actual y se almacena en element
        let element = a[i];
        // Evaluar si element actual ya está en el objeto dict con la condición: "si el elemento no está en el diccionario"
        if (!(element in dict)) {
            // Si el elemento no está, se agrega al diccionario marcándolo como verdadero
            dict[element] = true;
        } else {
            // Si el elemento ya está, significa que es el primer duplicado y se actualiza result con el valor del elemento duplicado y se rompe el ciclo.
            result = element;
            break;
        }
    }
    // Si no se encuentra ningún duplicado, el valor de result seguirá siendo -1.
    return result;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
console.log(firstDuplicate([2, 1, 3, 1, 3, 2]));
