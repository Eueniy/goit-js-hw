"use strict";

// ===== TASK 01 =====

function task1() {
  const Account = function({ login, email }) {
    this.login = login;
    this.email = email;
  };

  Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  console.log(Account.prototype.getInfo); // function

  const mango = new Account({
    login: "Mangozedog",
    email: "mango@dog.woof",
  });

  mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

  const poly = new Account({
    login: "Poly",
    email: "poly@mail.com",
  });

  poly.getInfo(); // Login: Poly, Email: poly@mail.com
}

// ===== TASK 02 =====

function task2() {
  const User = function({ name, age, followers }) {
    this.name = String(name);
    this.age = Number(age);
    this.followers = Number(followers);
  };

  User.prototype.getInfo = function() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
    );
  };

  const mango = new User({
    name: "Mango",
    age: 2,
    followers: 20,
  });

  mango.getInfo(); // User Mango is 2 years old and has 20 followers

  const poly = new User({
    name: "Poly",
    age: 3,
    followers: 17,
  });

  poly.getInfo(); // User Poly is 3 years old and has 17 followers
}

// ===== TASK 03 =====
function task3() {
  class Storage {
    constructor(items) {
      this.items = items;
    }

    getItems() {
      return this.items;
    }

    addItem(item) {
      this.items.push(item);
    }

    removeItem(item) {
      this.items.splice(items.indexOf(item), 1);
    }
  }

  const storage = new Storage([
    "Нанитоиды",
    "Пролонгер",
    "Железные жупи",
    "Антигравитатор",
  ]);
  console.log("storage", storage);
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

  storage.addItem("Дроид");
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

  storage.removeItem("Пролонгер");
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
}

// ===== TASK 04 =====
function task4() {
  class StringBuilder {
    constructor(value) {
      this._value = value;
    }

    get value() {
      return this._value;
    }

    append(value) {
      this._value = this._value + value;
    }

    prepend(value) {
      this._value = value + this._value;
    }

    pad(value) {
      this._value = value + this._value + value;
    }
  }

  const builder = new StringBuilder(".");
  builder.append("^");
  console.log(builder.value); // '.^'

  builder.prepend("^");
  console.log(builder.value); // '^.^'

  builder.pad("=");
  console.log(builder.value); // '=^.^='
}
// ===== TASK 05 =====

function task5() {
  class Car {
    static getSpecs(car) {
      return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
    }

    constructor({ maxSpeed, price }) {
      this.maxSpeed = maxSpeed;
      this._price = price;
      this.speed = 0;
      this.isOn = false;
      this.distance = 0;
    }

    set price(newPrice) {
      this._price = newPrice;
    }
    get price() {
      return this._price;
    }

    turnOn() {
      console.log("isOn:", (this.isOn = true));
    }

    turnOff() {
      console.log("isOn:", (this.isOn = false), "speed:", (this.speed = 0));
    }

    accelerate(value) {
      this.speed += value;
      this.speed = this.speed <= this.maxSpeed ? this.speed : this.maxSpeed;
      console.log("accelerate speed =", this.speed);
    }

    decelerate(value) {
      this.speed -= value;
      this.speed = this.speed > 0 ? this.speed : 0;
      console.log("decelerate speed =", this.speed);
    }

    drive(hours) {
      console.log("distance =", (this.distance += hours * this.speed));
    }
  }

  const mustang = new Car({ maxSpeed: 200, price: 2000 });

  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);

  console.log(Car.getSpecs(mustang));
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();

  console.log(Car.getSpecs(mustang));
  // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

  console.log("Mustang price =", mustang.price); // 2000
  mustang.price = 4000;
  console.log("New Mustang price =", mustang.price); // 4000
}
