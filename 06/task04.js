"use strict";
import users from "./users.js";

// Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
