'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  const numberedInput = Number.isNaN(Number(input)) ? 0 : Number(input);
  if (numberedInput !== 0) {
    numbers.push(numberedInput);
  } else {
    numbers;
  }
  // numbers.push(numberedInput) ? 0 : numbers;
} while (input !== null);
console.log(numbers);

function arraySum(arr) {
  for (let i = 0; i < arr.length; i++) {
    total += numbers[i];
  }
  return total;
}
arraySum(numbers);
alert(`Общая сумма чисел равна ${total}`);
