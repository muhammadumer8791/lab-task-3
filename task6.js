function sumOfMultiples(x, y, z) {
    let sum = 0;
    for(let i = 1; i < z; i++) {
        if(i % x === 0 || i % y === 0) {
            sum += i;
        }
    }
    return sum;
}

// Using student ID-inspired numbers
console.log(sumOfMultiples(4, 7, 20)); // Sum of multiples of 4 or 7 below 20