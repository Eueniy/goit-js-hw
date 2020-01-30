"use strict";
import users from "./users.js";

// Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender);

console.table(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
