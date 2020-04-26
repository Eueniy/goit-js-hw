"use strict";

const task06 = document.querySelector(".task06");
task06.style.display = "block";

const input = document.getElementById("validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  const cInput = e.target.value;
  if (cInput.length === 6) {
    input.setAttribute("class", "valid");
  } else {
    input.setAttribute("class", "invalid");
  }
}

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.
// •	Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// •	Если введено подходящее количество, то border инпута становится зеленым, если
// неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
