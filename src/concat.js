// let array1 = ["green, blue"];
// let array2 = ["purple", "yellow"];

// console.log(array1.concat(array2));

//join메소드 사용
// let array1 = ["green", "blue", "purple", "yellow"];

// console.log(array1.join());
// console.log(array1.join(" "));

// let numbers = [1, 100, 25, 50];
// let sum = numbers.reduce((acc, cur, idx) => {
//   console.log(acc, cur, idx);
//   return acc + cur;
// }, 0);

// numbers.forEach((elm) => {
//   sum += elm;
// });

// console.log(sum);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, orange: 1 }
