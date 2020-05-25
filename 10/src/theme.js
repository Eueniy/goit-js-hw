const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const userTheme = localStorage.getItem('userTheme');
console.log(userTheme);
if (userTheme === null) {
  localStorage.setItem('userTheme', Theme.LIGHT);
}
const body = document.querySelector('body');
body.classList.add(Theme.LIGHT);
const switcher = document.querySelector('.js-switch-input');

if (userTheme) {
  if (userTheme === Theme.DARK) {
    switcher.checked = true;
  } else {
    switcher.checked = false;
  }
  body.classList.add(userTheme);
}

switcher.addEventListener('change', onChange);

function onChange(e) {
  if (e.target.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('userTheme', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('userTheme', Theme.LIGHT);
  }
}
