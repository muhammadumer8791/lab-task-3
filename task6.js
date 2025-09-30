function sumOfMultiples(x, y, z) {
    let sum = 0;
    for(let i = 1; i < z; i++) {
        if(i % x === 0 || i % y === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfMultiples(4, 7, 20));