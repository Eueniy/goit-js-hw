'use strict';

const formatString = (string, value = 40) =>
string.length > value ? `${string.slice(0, value)}...` : string;

// const formatString = function(str) {
//   if (str.length >= 40) {
//     const formatStr = str.slice(0, 40) + '...';
//     return formatStr;
//   } else {
//     return str;
//   }
// };

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

верно, но лаконичнее так
function formatString(string) {
return string.length > 40 ? `${string.slice(0, 40)}...` : string;
}

// А можно и задавать размер вторым парметром
// const formatString = (string, value = 40) =>
// string.length > value ? `${string.slice(0, value)}...` : string;