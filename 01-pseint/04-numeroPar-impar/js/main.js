function parImpar() {
    let numero = document.querySelector('#numero').value;
    if (numero % 2 == 0) {
        document.querySelector('#resultado').innerHTML = "El número " + numero + " es PAR";
    } else {
        document.querySelector('#resultado').innerHTML = "El número " + numero + " es IMPAR";
    }
}
