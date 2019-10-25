const total = 100;
const ordered = prompt('Введите количество заказываемого товара:');
console.log(ordered);
if (ordered <= total) {
  alert('Благодарим! Заказ оформлен, с вами свяжется менеджер');
} else {
  alert('Извините, на складе недостаточно товаров!');
}
