function calcularTiempo() {
    let distancia = document.querySelector('#distancia').value;
    let velocidad = document.querySelector('#velocidad').value;
    let tiempo = distancia / velocidad;
    document.querySelector('#resultado').innerHTML = "El tiempo necesario es de " + tiempo + " horas";
}
