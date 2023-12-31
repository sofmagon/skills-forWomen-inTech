// FizzBuzz

function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// Optimizando con operador ternario
function fizzBuzz2(number) {
    for (let i = 1; i <= number; i++) {
        const output = (i % 3 === 0 && i % 5 === 0) ? 'FizzBuzz' : (i % 3 === 0) ? 'Fizz' : (i % 5 === 0) ? 'Buzz' : i;
        console.log(output);
    }
}

fizzBuzz(30);
fizzBuzz2(30);
