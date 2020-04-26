"use strict";

const task07 = document.querySelector(".task07");
task07.style.display = "block";

const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("click", onRange);

function onRange(e) {
  const fontSize = input.value;
  text.style.fontSize = `${fontSize}px`;
}

// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.
