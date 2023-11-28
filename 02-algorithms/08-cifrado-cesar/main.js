// Convirtiendo la cadena en un array, separando a su vez cada elemento
const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Mapa
const getCipherMap = (alphabet, shift) => {
    return alphabet.reduce((charsMap, currentChar, charIndex) => {
        // Crear una copia del mapa acumulado
        const charsMapClone = { ...charsMap };

        // Calcular el índice del caracter en el que se está mapeando la encriptación.
        // El índice + el desplazamiento, dividido entre el tamaño del abecedario
        let encryptedCharIndex = (charIndex + shift) % alphabet.length;

        // Si el index es negativo
        if (encryptedCharIndex < 0) {
            encryptedCharIndex += alphabet.length;
        }

        // Mapeo de los caracteres: la clave será el caracter de inicio y el valor será el caracter mapeado
        charsMapClone[currentChar] = alphabet[encryptedCharIndex];

        // Devolver el mapa que se acaba de calcular
        return charsMapClone;
    }, {});
}

const encrypt = (str, shift, alphabet = englishAlphabet) => {
    const cipherMap = getCipherMap(alphabet, shift);

    return str.toLowerCase().split('').map(char => cipherMap[char] || char).join('');
};

const dencrypt = (str, shift, alphabet = englishAlphabet) => {
    const cipherMap = getCipherMap(alphabet, -shift);

    return str.toLowerCase().split('').map(char => cipherMap[char] || char).join('');
};

// Prueba
const str = 'Hola Mundo desde JavaScript';
const enc = encrypt(str, 2);
const dec = dencrypt(enc, 2);
console.log(str);
console.log(enc);
console.log(dec);
