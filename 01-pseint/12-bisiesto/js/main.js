function esBisiesto() {
	let anio = document.querySelector('#year').value;

	if (anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0) {
		document.querySelector('#resultado').innerHTML = "El año " + anio + " es bisiesto";
	} else {
		document.querySelector('#resultado').innerHTML = "El año " + anio + " NO es bisiesto";
	}
}
