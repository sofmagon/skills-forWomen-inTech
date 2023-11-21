function esPalindromo() {
    let palabraIngresada = document.querySelector('#palabra').value;
    let analisis = palabraIngresada.replace(' ', '').split('').reverse().join('');

    if (palabraIngresada == analisis) {
        document.querySelector('#resultado').innerHTML = "Sí es un palíndromo";
    } else {
        document.querySelector('#resultado').innerHTML = "No es un palíndromo";
    }
}
