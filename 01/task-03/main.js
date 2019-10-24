'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt('Введите, пожалуйста, пароль', '');

if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (message == null) {
  message = 'Отменено пользователем';
} else if (message !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
console.log(message);