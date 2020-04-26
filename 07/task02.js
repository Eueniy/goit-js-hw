"use strict";

const task02 = document.querySelector(".task02");
task02.style.display = "block";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.getElementById("ingredients");

function createIngredientsList() {
  let list = [];
  ingredients.forEach(el => {
    const li = document.createElement("li");
    li.textContent = el;
    list.push(li);
  });
  return list;
}
ingredientsList.append(...createIngredientsList());
