'use strict';

// ===== TASK 01 =====
function task1() {
  const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = 'happy';
  user.hobby = 'javascript';
  user.premium = false;

  const entries = Object.entries(user);

  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    console.log(`${key}: ${value}`);
  }
}
// ===== TASK 02 =====

function task2() {
  const countProps = obj => Object.keys(obj).length;
  // const countProps = function(obj) {
  //   const objKeys = Object.keys(obj);
  //   const quantity = objKeys.length;
  //   return quantity;
  // };

  console.log(countProps({})); // 0
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  console.log(
    countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }),
  ); // 3
}

// ===== TASK 03 =====

function task3() {
  const findBestEmployee = function(employees) {
    const keys = Object.keys(employees);
    let maxTask = 0;
    let name;
    for (const key of keys) {
      if (maxTask < employees[key]) {
        maxTask = employees[key];
        name = key;
      }
    }
    return `The most productive employee is ${name}: ${maxTask} tasks completed`;
  };

  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence

  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango

  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux
}

// ===== TASK 04 =====

function task4() {
  const countTotalSalary = function(employees) {
    const salaries = Object.values(employees);
    let totalSalary = 0;

    for (const salary of salaries) {
      totalSalary += salary;
    }
    return `Общая сумма зарплаты всех работников: ${totalSalary}`;
  };

  console.log(countTotalSalary({})); // 0

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); //400
}

// ===== TASK 05 =====
function task5() {
  const getAllPropValues = function(products, key) {
    const values = [];
    for (const value of products) {
      if (key in value) {
        values.push(value[key]);
      }
    }
    return values;
  };

  const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  console.log(getAllPropValues(products, 'category')); // []
}

// ===== TASK 06 =====

function task6() {
  const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

  const calculateTotalPrice = (products, prodName) => {
    let totalPrice = 0;
    for (const product of products) {
      if (product.name === prodName) {
        totalPrice = product.price * product.quantity;
      }
    }
    return totalPrice;
  };

  console.log(calculateTotalPrice(products, 'Радар')); // 5200
  console.log(calculateTotalPrice(products, 'Дроид')); // 2800
}
