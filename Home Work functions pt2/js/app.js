let numbers = [55,15,1,125,3];
let newNumbers = numbers.map(number => number * 10);
console.log(newNumbers);
// Bonus
function numArr(arr, num) {
    return arr.map(element => element * num);
}

console.log(numArr(numbers, 2));

// HW 02 with bonus

function secondFunc(arr, num) {
    return arr.filter(el => el % num === 0 ).sort((a,b) => a-b);
}

console.log(secondFunc(numbers, 5));





