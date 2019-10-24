'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let droidCount = prompt('Введите количество дроидов:');
if (droidCount == null) {
  console.log('Отменено пользователем');
} else {
  let totalPrice = pricePerDroid * droidCount;
  console.log(totalPrice);

  if (credits <= totalPrice) {
    alert('Недостаточно средств на счету!');
  } else {
    let creditsBallance = credits - totalPrice;
    alert(`Вы купили ${droidCount} дроидов, на счету осталось ${creditsBallance} кредитов.`);
  }
}
