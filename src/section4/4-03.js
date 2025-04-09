// 위 2번 문제의 함수를, 배열 대신 N개의 인자들을 받는 코드로 다시 작성해보세요.

function funcEach(func, ...rest) {
  for (element of rest) {
    func(element);
  }
}

//  호출 예시
funcEach(console.log, 2, 3, 4);
