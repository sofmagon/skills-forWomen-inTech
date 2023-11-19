function incrementoSalarial() {
    let sueldo = document.querySelector('#sueldo').value;
    let incremento;
    let nuevoSueldo;

    if (sueldo <= 15000) {
        incremento = sueldo * 0.20;
        nuevoSueldo = parseInt(sueldo) + parseInt(incremento);
        document.querySelector('#resultado').innerHTML = "Tu aumento será de $" + incremento + "MXN.";
        document.querySelector('#nuevoSueldo').innerHTML = "A partir del próximo mes comenzarás a percibir: $ " + nuevoSueldo + "MXN.";
    } else {
        incremento = sueldo * 0.15;
        nuevoSueldo = parseInt(sueldo) + parseInt(incremento);
        document.querySelector('#resultado').innerHTML = "Tu aumento será de $" + incremento + "MXN.";
        document.querySelector('#nuevoSueldo').innerHTML = "A partir del próximo mes comenzarás a percibir: $ " + nuevoSueldo + "MXN.";
    }
}
