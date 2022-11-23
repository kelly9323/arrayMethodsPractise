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
  let max;
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else {
      max = array[i] - 1;
    }
  }
  return max;
};

console.log(maxElementArray(arrNums));

//* повертати кількість максимальних(однакових) елементів

function returnNumberOfMaxEl(array) {
  let count = 0;
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      count++;
    }
  }
  return count;
}
console.log(returnNumberOfMaxEl(arrNums));

// slice () method returns new array with copy of old one( if we dont add any parameters)
// in Parentheses you can add argum. from which index to slice and end point index

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const newArra = nums.slice(2, 4); //between 2 and 4 index will show

nums.slice(2, -4); //last 4 index dont add

//splice changes array, doesnt create new array
nums.splice(0, 2);
console.log(nums); // starting with this index delete all till the end
nums.splice(0, 2, 111); //2 amount of deleted elements
//111 replaces deleted element ( can be any amount)
// if nums.splice(0, 0 , 111 ) nothing to delete
//just adds 111 at hte beginning

//if nums.splice(3, 0 , 111, 343, 343 ) starting from index 3 doesnst delete anything (0) and paste next values after 3rd index

// find minimal value and paste another value instead
let aray = [3, 3, 34, 4, 5, 3];
function getMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
function changeMinElem(array, value) {
  let min = getMin(array);
  let startIndex = 0;
  while (true) {
    let startIndexMin = array.indexOf(min, startIndex++);
    if (startIndexMin === -1) {
      return;
    }
    aray.splice(startIndexMin, 1, value);
  }
}

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === min) {
//     array[i] = value;
//   }
// }
// } // first variant

console.log(aray);
changeMinElem(aray, 888);
console.log(aray);
