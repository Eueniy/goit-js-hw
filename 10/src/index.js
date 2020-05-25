import menu from './menu.json';
import itemTemplate from './templates/menu-item.hbs';
import theme from './theme.js';
import './styles.css';

// const post = itemTemplate(menu[0]);

const menuItem = document.querySelector('.js-menu');

buildMenuItems(menu);

function buildMenuItems(menu) {
  const items = menu.map(el => itemTemplate(el)).join('');
  menuItem.insertAdjacentHTML('afterbegin', items);
}
