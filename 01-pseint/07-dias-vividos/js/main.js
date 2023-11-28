function calcular_diasVividos() {
    let bornDay = parseInt(document.querySelector('#bornDay').value);
    let bornMonth = parseInt(document.querySelector('#bornMonth').value);
    let bornYear = document.querySelector('#bornYear').value;
    let currentDay = parseInt(document.querySelector('#currentDay').value);
    let currentMonth = parseInt(document.querySelector('#currentMonth').value);
    let currentYear = document.querySelector('#currentYear').value;
    let livedYears, leapDays, livedDays_byAge, addOne, daysLeft_bornYear, daysLeft_currentYear;

    // Calcular edad
    livedYears = currentYear - bornYear;
    // Calcular años bisiestos vividos para obtener un día por cada uno
    leapDays = Math.floor(livedYears / 4);
    // Obtener los días vividos con base en su edad y años bisiestos ***
    livedDays_byAge = (livedYears * 365) + leapDays;

    // Saber si el año actual es bisiesto para añadir un día ***
    if (currentYear % 4 == 0 && currentYear % 100 != 0 || currentYear % 400 == 0) {
        addOne = 1;
    } else {
        addOne = 0;
    }

    /* Obtener días no vividos del año de nacimiento (antes de nacer) ***
    */
    switch (bornMonth) {
        case 1:
            daysLeft_bornYear = 365 - bornDay;
            break;
        case 2:
            daysLeft_bornYear = (28 - bornDay) + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
            break;
        case 3:
            daysLeft_bornYear = (31 - bornDay) + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
            break;
        case 4:
            daysLeft_bornYear = (30 - bornDay) + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
            break;
        case 5:
            daysLeft_bornYear = (31 - bornDay) + 30 + 31 + 31 + 30 + 31 + 30 + 31;
            break;
        case 6:
            daysLeft_bornYear = (30 - bornDay) + 31 + 31 + 30 + 31 + 30 + 31;
            break;
        case 7:
            daysLeft_bornYear = (31 - bornDay) + 31 + 30 + 31 + 30 + 31;
            break;
        case 8:
            daysLeft_bornYear = (31 - bornDay) + 30 + 31 + 30 + 31;
            break;
        case 9:
            daysLeft_bornYear = (30 - bornDay) + 31 + 30 + 31;
            break;
        case 10:
            daysLeft_bornYear = (31 - bornDay) + 30 + 31;
            break;
        case 11:
            daysLeft_bornYear = (30 - bornDay) + 31;
            break;
        case 12:
            daysLeft_bornYear = 31 - bornDay;
            break;
        default:
            document.querySelector('#resultado').innerHTML = "Intenta de nuevo.";
    }

    /* Obtener días restantes año actual, son días que aún no deben contar ***
    */
    switch (currentMonth) {
        case 1:
            daysLeft_currentYear = 365 - currentDay;
            break;
        case 2:
            daysLeft_currentYear = 365 - (31 + currentDay);
            break;
        case 3:
            daysLeft_currentYear = 365 - (31 + 28 + currentDay);
            break;
        case 4:
            daysLeft_currentYear = 365 - (31 + 28 + 31 + currentDay);
            break;
        case 5:
            daysLeft_currentYear = 365 - (31 + 28 + 31 + 30 + currentDay);
            break;
        case 6:
            daysLeft_currentYear = 365 - (31 + 28 + 31 + 30 + 31 + currentDay);
            break;
        case 7:
            daysLeft_currentYear = 365 - (31 + 28 + 31 + 30 + 31 + 30 + currentDay);
            break;
        case 8:
            daysLeft_currentYear = 365 - (31 + 28 + 31 + 30 + 31 + 30 + 31 + currentDay);
            break;
        case 9:
            daysLeft_currentYear = 365 - (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + currentDay);
            break;
        case 10:
            daysLeft_currentYear = 365 - (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + currentDay);
            break;
        case 11:
            daysLeft_currentYear = 365 - (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + currentDay);
            break;
        case 12:
            daysLeft_currentYear = 365 - (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + currentDay);
            break;
        default:
            document.querySelector('#resultado').innerHTML = "Intenta de nuevo.";
    }

    /* Resultado final,
    total =
    + Días vividos con base a la edad
    + año bisiesto actual (+1 si es que lo es)
    + días no vividos del año de nacimiento
    - días restantes año actual */
    let total = (livedDays_byAge + addOne + daysLeft_bornYear) - daysLeft_currentYear;
    document.querySelector('#resultado').innerHTML = "Has vivido un total de " + total + " días";

    console.log(`Días vividos por edad: ${livedDays_byAge}`);
    console.log(`¿Año bisiesto? ${addOne}`);
    console.log(`Días no vividos del año de nacimiento: ${daysLeft_bornYear}`);
    console.log(`Días restantes del año actual: ${daysLeft_currentYear}`);
}
