function roundMe(...numbers) {
    if(numbers.length === 0) return 0;
    if(numbers.length === 1) return Math.round(numbers[0]);
    return numbers.map(num => Math.round(num));
}

// Test with CGPA-like numbers
console.log(roundMe(3.67)); // 4
console.log(roundMe(3.45, 3.89, 3.22)); // [3, 4, 3]