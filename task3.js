function createPhoneNumber(numbers) {
    let areaCode = numbers.slice(0,3).join('');
    let firstPart = numbers.slice(3,6).join('');
    let secondPart = numbers.slice(6).join('');
    return `(${areaCode}) ${firstPart}-${secondPart}`;
}

// Pakistani phone number format
let myNumbers = [0, 3, 0, 1, 2, 3, 4, 5, 6, 7];
console.log(createPhoneNumber(myNumbers)); // "(030) 123-4567"