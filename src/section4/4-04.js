// 인자로 주어진 숫자를 0이 될 때까지 재귀적으로 출력하는 함수를 작성해보세요.

function recursiveDecrease(num) {
  console.log(num);
  if (num > 0) {
    num--;
    recursiveDecrease(num);
  }
}

//  호출 예시
recursiveDecrease(7);
//재귀함수는 내부적으로 스스로를 호출한다.
