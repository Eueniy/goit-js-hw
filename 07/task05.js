"use strict";

const task05 = document.querySelector(".task05");
task05.style.display = "block";

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", changeOutput);

function changeOutput(e) {
  output.innerHTML = e.currentTarget.value;
}

// Напиши скрипт, который при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане
// должна отображаться строка 'незнакомец'.
