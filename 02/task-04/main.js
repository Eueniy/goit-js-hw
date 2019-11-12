'use strict';

const formatString = function(str) {
  if (str.length >= 40) {
    const formatStr = str.slice(0, 40) + '...';
    return formatStr;
  } else {
    return str;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
