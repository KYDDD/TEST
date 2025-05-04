//  예시
// ### 3.

// 인자로 `from` 과 `to` 이 두 숫자가 주어졌을 때 `from` 으로부터  `to` 까지 1씩 늘려가며 출력하는 이터러블을 반환하는 함수를 만들어보세요. 전자가 항상 더 작다고 가정합니다.
function makeIterable(from, to) {
  return {
    [Symbol.iterator]() {
      return {
        current: from,
        last: to,

        next() {
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}
