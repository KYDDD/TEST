const numbers = [1, 2, 3, 4, 5];

//  배열 안의 숫자를 모두 더하는 코드를 작성해보세요.
let sum = 0;
// for (i = 0; i <= numbers.length - 1; i++) {
//   sum += numbers[i];
// }

// console.log(sum);
for (let num of numbers) {
  sum += num;
}

console.log(sum);
//배열에는 for ...of문을 사용할수 있다.
