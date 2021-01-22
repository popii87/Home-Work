let numbers = [5, 10, 6,];
let listItems = document.getElementById('numbers');

function printNumbers(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        listItems.innerHTML += `<li> ${numbers[i]} </li>`;
    }
}
printNumbers(numbers);

function sumNumbers(numbers) {
    let result = 0;
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
listItems.innerHTML += `<li>Total:${numbers[0]} + ${numbers[1]} + ${numbers[2]} = ${sumNumbers(numbers)}</li>`;