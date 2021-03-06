"use strict";
import users from "./users.js";

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users =>
  users.reduce((acc, skill) => {
    acc.push(...skill.skills);
    acc.sort();
    acc.forEach((skill, i, arr) => {
      skill == arr[i - 1] ? arr.splice(i, 1) : skill;
    });
    return acc;
  }, []);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', ' non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
