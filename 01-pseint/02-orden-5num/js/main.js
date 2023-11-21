function ordenarNumeros() {
    let arrayNumeros = [];

    let n1 = document.querySelector('#num1').value;
    let n2 = document.querySelector('#num2').value;
    let n3 = document.querySelector('#num3').value;
    let n4 = document.querySelector('#num4').value;
    let n5 = document.querySelector('#num5').value;

    arrayNumeros.push(n1, n2, n3, n4, n5);
    arrayNumeros.sort((a, b) => a - b);
    console.log(arrayNumeros);
}
