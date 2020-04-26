"use strict";

const task01 = document.querySelector(".task01");
task01.style.display = "block";

const categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории`);

[...categories].forEach(el => {
  const title = el.querySelector("h2");
  const li = el.querySelectorAll("li");
  console.log(
    `Категория: ${title.textContent}, Количество элементов: ${li.length}`,
  );
});
