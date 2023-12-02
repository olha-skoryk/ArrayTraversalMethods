'use strict';

/*1. Дан масив, зробити масив, елементи якого будуть рядками, зробленими за наступним шаблоном : 
Item with index X has value Y
де X - індекс елемента у масиві, Y - значення елементу*/

const arr = ['test', false, 2345, null];
const task1 = arr.map(function(Y, X) {
  const arrTask1 = 'Item with index ' + X + ' has value ' + Y;
  return arrTask1;
});

console.log('task1', task1);

/*2. Дан масив, отримати на його основі масив повнолітніх користувачів*/

const arr2 = [
  {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male'},
  {firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male'},
  {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female'},
  {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female'},
  {firstName: 'Undefined', lastName: 'Undefined', age: 99},
  {firstName: 'Null', lastName: 'Nullochyk', gender: 'male'}
]

const task2 = arr2.filter(arr2 => arr2.age >= 18);

console.log('task2', task2);

/*3. Дан масив, знайти індекс першої жінки у массиві*/ 

const arr3 = [
  {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male'},
  {firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male'},
  {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female'},
  {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female'},
  {firstName: 'Undefined', lastName: 'Undefined', age: 99},
  {firstName: 'Null', lastName: 'Nullochyk', gender: 'male'} 
];

const task3 = arr3.findIndex(arr3 => arr3.gender === 'female');

console.log('task3', task3);

