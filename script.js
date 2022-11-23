/*concat - возвращает новый массив,
 состоит из массива где был вызван, 
 соединенного с другими масивами и значениями, 
 переданными в кач. аргумента */

const arrNum1 = [1, 2, 3];
const arrNum2 = [9, 8, 7];
const arrNum3 = [9, 8, 5];

const resultArr = arrNum1.concat(arrNum2, arrNum3); //через кому несколько значений

/* fill() - заполняет все ячейки значением, изменяет текущ.
массив
*/
const newArray = new Array(5).fill(2).concat(14);
//можна через точку добавлять методы другие

//push добавляет в конец эррей значение в дужках

//pop удаляет последний элемент масива

arrNum2.pop();

//shift - удаляет первый элемент и возращает его значаение

arrNum3.shift();
//unshift - добавляет в начало новый элемент
arrNum2.unshift(34, 434, 34343);

//задание (добавить юа в конец масива)

const languages = ["ua", "fr", " pl", "en"];
let uaLang = languages.shift();
languages.push(uaLang);

//Как работает pop, создаем функцию

function MyArrayPrototype() {
  this.pop = function () {
    let value = this[this.length - 1];
    delete value;
    this.length--;
    return value;
  };
}

//includes() определяет содержит ли массив опредю элемент,
// возращает true/false
const arrNum4 = [33, 843, 5434];
arrNum4.includes(3); // false

//indexOf - повертаэ позицию в массиве, первый найденный индекс или -1 если нет такого
const arrayExample = ["ua", 2342, 23423, 234, "ua"];
arrayExample.indexOf("ua");

// lastIndexOf - знайдений з конца

arrayExample.lastIndexOf("ua");

//завдання (функция получает как аргумент массив и ключ,
// возвращ тру если ключ есть в масиве)

function checkKey(array, key) {
  return array.includes(key);
}
// console.log(checkKey(arrayExample, "ua"));

//reverse - перевертаэ масив, не созд. новый
const colors = ["red", "blue", "gris"];
colors.reverse();

/* завдання (написати функцыю шо приймаэ масив 
    ы поверта тру якщо есть два однакових значення шо стоять
    рядом, або фолс)
*/
function checkKeysInRow(array) {
  for (let i = 0; index < array.length; index += 1) {
    if (array[index] === array[index + 1]) {
      return true;
    }
  }
}
// join - сепаратор, по молчанию ставит запятую, в [] можно указать расделитель

// Homework

/* 
написати скрипт (можна функцію можна без), який виводить індекс 
максимального елемента в масиві. Якщо максимальних елементів 
декілька(значення однакові) - виводить індекс останнього
const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5


* повертати кількість максимальних(однакових) елементів
const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; =>кількість  2
*/
const arrNums = [1, 9, 5, 6, 7, 9, 4, 6];
const maxElementArray = function (array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    return max;
  }
};

// console.log(maxElementArray(arrNums));

//* повертати кількість максимальних(однакових) елементів

function returnNumberOfMaxEl(array) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      count++;
      return count;
    }
  }
}
// console.log(returnNumberOfMaxEl(arrNums));

//cума всех аргументов

function sum() {
  // аргументы -- аргументы
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// console.log (sum(1,2,2,2));

// переписать пуш шоб он принимал неск элементов

let push = function (arguments) {
  this[this.length++] += arguments;
  return this.length;
};

//forEach() -  не меняет элементы, применяет функцию ко всем в массиве.
const nums = [1, 25, 6, 5, 9];

function getSquareNumber(n) {
  console.log(n * n);
  return n * n;
}
// nums.forEach(getSquareNumber);

// for (let i = 0; i < nums.length; i++) {
//   getSquareNumber(nums[i]);

// }
// nums.forEach(getSquareNumber);

nums.forEach(function (n) {
  console.log(n * n * n);
});

//наша функция forEach

this.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    // добавляя к массиву, функция перебирает каждый элемент
    callback(this[i]); // callback - масив, this - элементы масива
  }
};

function logItem(v) {
  console.log(v);
}

nums.forEach(logItem);

// some() - проверяет, удовлетворяет ли элемент масива условию в
// передаваетмой функции

this.some = function (func) {
  for (let i = 0; i < this.length; i++) {
    if (func(this[index])) {
      return true;
    }
  }
  return false;
};
const array22 = new Array();

console.log(
  array22.some(function (item) {
    return item < 10; // false - масив пустой
  })
);

//every() - проверяет удовлетворяют ли все элементы массива условию. true || false

this.every = function (func) {
  for (let i = 0; index < func.length; i++) {
    if (func(this[index]) === false) {
      return false;
    }
  }
};

//filter() - функция проверки

const numbers = [2, 25, 6, 5, 9];

const evenNums = numbers.filter(function (item) {
  return item % 2 === 0;
});
console.log(evenNums);

// Наш filter()

this.filter = function (func) {
  const newArr = new Array();
  for (let i = 0; i < this.length; i++) {
    if (func(this[index])) {
      newArr.push[this[index]];
    }
  }
  return newArr;
};

//map() - creates new array with

const numb = [2, 3, 25, 6, 5, 9];

function getSquareNumbe(n) {
  console.log(n * n);
  return n * n;
}
numb.map(getSquareNumbe);
console.log(numb);

//sort
const nums12 = [1, 2, 33, 234, 22];
nums12.sort(function (current, next) {
  return current < next ? -1 : 1;
});
console.log(nums12); //  [1, 2, 22, 33, 234]

// для чисел передаем функцию, а для стринг можно без, будет сорт по юникоду

//reduce - применяет функцию reducer к каждому элементу массива (слева-направо),
//возвращая одно результирующее значение.
//принимает

const result = nums12.reduce(function (summa, item) {
  const res = summa + item;
  return res;
});
console.log(result);
