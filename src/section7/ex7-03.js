const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 23 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 30 },
  { name: "Eddie", age: 28 },
];

//  18세 이상의 사용자 이름을 쉼표로 구분한 대문자로 출력하는 코드를 작성해보세요.
const arr = users
  .filter(({ age }) => age >= 18)
  .map(({ name }) => name)
  .join(", ")
  .toUpperCase();
console.log(arr);
