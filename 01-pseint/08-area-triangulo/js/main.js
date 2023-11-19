function areaTriangulo() {
    let base = document.querySelector('#base').value;
    let altura = document.querySelector('#altura').value;
    let area = ((base * altura) / 2).toFixed(2);
    document.querySelector('#resultado').innerHTML = "Tu resultado es de: " + area;
}
