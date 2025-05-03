const numbers = [1, 3, 2, 5, 4];

//  reduce를 사용해서 최대값을 구하는 코드를 작성해보세요.

console.log(numbers.reduce((prev, curr) => Math.max(prev, curr)));
