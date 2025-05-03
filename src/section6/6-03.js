//  각 요소가 숫자라면 그것이 정수 또는 실수임을 출력하도록 코드를 작성해보세요.
//  실수라면 소수 두 자리까지만 나타내세요.

const arr = [1, "text", 3.14, 5, { key: "value" }, 6.28732, 7];

for (let i of arr) {
  if (typeof i === "number") {
    if (Number.isInteger(i)) {
      console.log(`${i}는 정수입니다.`);
    } else {
      i = i.toFixed(2);
      console.log(`${i}는 실수입니다.`);
    }
  }
}
