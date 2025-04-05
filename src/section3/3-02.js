const score = 85;

// 위와 같이 `score` 란 상수가 있을 때, 아래와 같이 학점을 출력하는 코드를 `if` 문으로 작성해보세요.

// > 90점 이상은 A
// 80점 이상 90점 미만은 B
// 70점 이상 80점 미만은 C
// 60점 이상 70점 미만은 D
// 60점 미만은 F
// >

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
