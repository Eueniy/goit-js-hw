"use strict";

const task04 = document.querySelector(".task04");
task04.style.display = "block";

let counterValue = 0;
let value = document.getElementById("value");

const decrementButton = document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", decrement);

const incrementButton = document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", increment);

function decrement(e) {
  counterValue -= 1;
  value.innerHTML = counterValue;
}

function increment(e) {
  counterValue += 1;
  value.innerHTML = counterValue;
}

// Счетчик состоит из спана и кнопок, коt должны увеличивать и уменьшать значение счетчика на 1.
// •	Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// •	Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// •	Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
