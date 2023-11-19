function obtenerFactorial() {
    let numero = document.querySelector('#numero').value;
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }

    document.querySelector('#resultado').innerHTML = "El factorial de " + numero + " es " + factorial;
}
