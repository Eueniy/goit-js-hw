'use strict';

let input;
let total = 0;

do {
  input = prompt('Введите число');
  const numberedInput = Number.isNaN(Number(input)) ? 0 : Number(input);
  total = Number(total) + numberedInput;
  console.log(input);
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
