// 아래의 함수 `funcEach`를 작성해보세요.

// 두 개의 인자를 받습니다.
// 첫 번째 인자인 `func` 는 또 다른 함수,
// 두 번째 인자인 `array` 는 배열입니다.
// `array` 안의 모든 요소들을 하나씩 `func` 에 인자로 넣어 실행합니다.

function funcEach(func, array) {
  for (item of array) {
    func(item);
  }
}

//  예시

// function funcEach(func, array) {
//   for (item of array) {
//     func(item);
//   }
// }

//  호출 예시
funcEach(console.log, [1, 2, 3]);
