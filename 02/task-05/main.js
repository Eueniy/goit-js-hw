'use strict';

const checkForSpam = function(str) {
  const check = str.toLowerCase();
  console.log(check.includes('sale') || check.includes('spam'));
  return check;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
