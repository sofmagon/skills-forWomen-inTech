function calcularVolumen() {
    let radio = document.querySelector('#radio').value;
    let volumen = ((4 / 3) * Math.PI * Math.pow(radio, 3)).toFixed(2);
    document.querySelector('#resultado').innerHTML = "El volúmen de la esfera con radio " + radio + " cm, es " + volumen + " cm^3.";
}
