// ### 1.

// 클로저를 활용해서, 함수 생성시 인자로 주어진 수를 함수 실행시 인자로 주어진 수와 곱한 결과를 반환하는 코드를 작성해보세요.

//  사용 예시

function multiplyBy(firstNumber) {
  return function (secondNumber) {
    return firstNumber * secondNumber;
  };
}

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);

console.log(multiplyByTwo(3)); // 6
console.log(multiplyByFive(3)); // 15
