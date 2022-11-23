function MyArrayPrototype() {
  //перепешіть пуш так, щоб він приймав безліч аргументів і insert їх в кінець масиву
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      //перебираємо кожен аргумент
      this[this.length++] = arguments[i]; //значення аргументо всталяємо в кінець нашого масиву
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastItem;
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  };

  this.some = function (func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        return true;
      }
    }
    return false;
  };

  this.filter = function (func) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (func(this[index])) {
        newArr.push[this[i]];
      }
    }
    return newArr;
  };

  this.map = function (func) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr.push[func(this[i])];
    }
  };
  return newArr;
}

function MyArray() {
  this.length = 0;
  if (arguments.length === 1) {
    for (let i = 0; i < arguments[0]; i++) {
      this.push(undefined);
    }
    return;
  }
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.prototype = new MyArrayPrototype();
const myArr = new MyArray(4, 5, 5, 8);
myArr.push(12, 14, 12);
myArr.push(56);

// try if it works
function logItem(v) {
  console.log(v);
}
// myArr.forEach(logItem);

console.log(
  myArr.some(function (item) {
    return item < 10; // false - масив пустой
  })
);
