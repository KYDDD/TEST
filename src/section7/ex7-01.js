const numbers = [1, 2, 3, 4, 5];

//  배열의 메소드들을 활용해서, 홀수만 추려내어 10을 곱한 뒤
//  각각 출력하는 코드를 작성해보세요.

const arr2 = numbers
  .filter((num) => num % 2)
  .map((num) => num * 10)
  .forEach((num) => console.log(num));
