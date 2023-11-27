function calcular_diasMuertos_diasNavidad() {
    let diaActual = document.querySelector('#diaActual').value;
    let mesActual = document.querySelector('#mesActual').value;
    let diasMuertos;
    let diasNavidad;

    /* Día de muertos: obtener el restante del mes en evaluación, sumar todos los días de los meses que siguen y sumar 2 días de Nov
    Navidad: obtener el restante del mes en evaluación, sumar todos los días de los meses que siguen y sumar 25 días de Dic */

    if (mesActual == 1) {
        diasMuertos = (31 - diaActual) + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 2;
        document.querySelector('#resultadoMuertos').innerHTML = "Faltan: " + diasMuertos + " días para Día de Muertos";
        diasNavidad = (31 - diaActual) + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 25;
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 2) {
        diasMuertos = (28 - diaActual) + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 2;
        document.querySelector('#resultadoMuertos').innerHTML = "Faltan: " + diasMuertos + " días para Día de Muertos";
        diasNavidad = (28 - diaActual) + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 25;
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 3) {
        diasMuertos = (31 - diaActual) + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 2;
        document.querySelector('#resultadoMuertos').innerHTML = "Faltan: " + diasMuertos + " días para Día de Muertos";
        diasNavidad = (31 - diaActual) + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 25;
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 4) {
        diasMuertos = (30 - diaActual) + 31 + 30 + 31 + 31 + 30 + 31 + 2;
        document.querySelector('#resultadoMuertos').innerHTML = "Faltan: " + diasMuertos + " días para Día de Muertos";
        diasNavidad = (30 - diaActual) + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 25;
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 5) {
        diasMuertos = (31 - diaActual) + 30 + 31 + 31 + 30 + 31 + 2;
        document.querySelector('#resultadoMuertos').innerHTML = "Faltan: " + diasMuertos + " días para Día de Muertos";
        diasNavidad = (31 - diaActual) + 30 + 31 + 31 + 30 + 31 + 30 + 25;
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 6) {
        diasMuertos = (30 - diaActual) + 31 + 31 + 30 + 31 + 2;
        document.querySelector('#resultadoMuertos').innerHTML = "Faltan: " + diasMuertos + " días para Día de Muertos";
        diasNavidad = (30 - diaActual) + 31 + 31 + 30 + 31 + 30 + 25;
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 7) {
        diasMuertos = (31 - diaActual) + 31 + 30 + 31 + 2;
        document.querySelector('#resultadoMuertos').innerHTML = "Faltan: " + diasMuertos + " días para Día de Muertos";
        diasNavidad = (31 - diaActual) + 31 + 30 + 31 + 30 + 25;
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 8) {
        diasMuertos = (31 - diaActual) + 30 + 31 + 2;
        document.querySelector('#resultadoMuertos').innerHTML = "Faltan: " + diasMuertos + " días para Día de Muertos";
        diasNavidad = (31 - diaActual) + 30 + 31 + 30 + 25;
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 9) {
        diasMuertos = (30 - diaActual) + 31 + 2;
        document.querySelector('#resultadoMuertos').innerHTML = "Faltan: " + diasMuertos + " días para Día de Muertos";
        diasNavidad = (30 - diaActual) + 31 + 30 + 25;
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 10) {
        diasMuertos = (31 - diaActual) + 2;
        document.querySelector('#resultadoMuertos').innerHTML = "Faltan: " + diasMuertos + " días para Día de Muertos";
        diasNavidad = (31 - diaActual) + 30 + 25;
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 11) {
        // Verificar si mañana u hoy es Día de muertos, de lo contrario, ya pasó
        if (diaActual == 1) {
            diasMuertos = 2 - diaActual;
            document.querySelector('#resultadoMuertos').innerHTML = "Mañana es Día de Muertos";
        } else if (diaActual == 2) {
            document.querySelector('#resultadoMuertos').innerHTML = "Hoy es Día de Muertos";
        } else {
            document.querySelector('#resultadoMuertos').innerHTML = "Día de Muertos ya pasó 💀";
        }
        // Cálculo Navidad
        diasNavidad = (30 - diaActual) + 25
        document.querySelector('#resultadoNavidad').innerHTML = "Y además, faltan: " + diasNavidad + " días para Navidad";
    } else if (mesActual == 12) {
        // Verificar si mañana u hoy es Navidad
        if (diaActual == 24) {
            diasNavidad = 25 - diaActual;
            document.querySelector('#resultadoMuertos').innerHTML = "Día de Muertos ya pasó 💀";
            document.querySelector('#resultadoNavidad').innerHTML = "¡Mañanaaaaa es Navidaaaaaad! 🎄🎁";
        } else if (diaActual == 25) {
            document.querySelector('#resultadoMuertos').innerHTML = "Día de Muertos ya pasó 💀";
            document.querySelector('#resultadoNavidad').innerHTML = "¡Es hoy, es hoy! FELIZ NAVIDAAAAD 🎄🎁";
        } else if (diaActual < 25) {
            // ¿Entonces cuánto falta?
            diasNavidad = 25 - diaActual;
            document.querySelector('#resultadoMuertos').innerHTML = "Día de Muertos ya pasó 💀";
            document.querySelector('#resultadoNavidad').innerHTML = "...Sólo faltan: " + diasNavidad + " días para Navidad";
        } else {
            document.querySelector('#resultadoMuertos').innerHTML = "Día de Muertos y Navidad ya pasaron";
        }
    }
}
