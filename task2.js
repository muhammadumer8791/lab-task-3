function isNumberPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

function findNextPrime(prime) {
    let next = prime + 1;
    while(!isNumberPrime(next)) {
        next++;
    }
    return next;
}

let givenPrime = 17; // Changed to a different prime number
console.log(`Next prime after ${givenPrime} is ${findNextPrime(givenPrime)}`);