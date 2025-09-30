function abs(...numbers) {
    return numbers.length === 0 ? 0 : 
           numbers.length === 1 ? Math.abs(numbers[0]) :
           numbers.map(num => Math.abs(num));
}

function ceil(...numbers) {
    return numbers.length === 0 ? 0 :
           numbers.length === 1 ? Math.ceil(numbers[0]) :
           numbers.map(num => Math.ceil(num));
}

function floor(...numbers) {
    return numbers.length === 0 ? 0 :
           numbers.length === 1 ? Math.floor(numbers[0]) :
           numbers.map(num => Math.floor(num));
}

// Test with semester GPAs
console.log(abs(-3.67, -3.89)); // [3.67, 3.89]
console.log(ceil(3.01, 3.45)); // [4, 4]
console.log(floor(3.67, 3.89)); // [3, 3]