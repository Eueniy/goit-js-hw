'use strict';

const china = 'китай';
const chili = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';

let countryChoice = prompt(
  'Введите страну, куда необходимо осуществить доставку',
);
console.log('Страна доставки', countryChoice);

if (countryChoice === null) {
  alert('Очень жаль, что вы ничего не выбрали:(');
} else {
  let userCountry = countryChoice.toLowerCase();
  switch (userCountry) {
    case china:
      alert(`Доставка в ${china} будет стоить 100 кредитов`);
      break;
    case chili:
      alert(`Доставка в ${chili} будет стоить 250 кредитов`);
      break;
    case australia:
      alert(`Доставка в ${australia} будет стоить 170 кредитов`);
      break;
    case india:
      alert(`Доставка в ${india} будет стоить 80 кредитов`);
      break;
    case jamaica:
      alert(`Доставка в ${jamaica} будет стоить 120 кредитов`);
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
}
