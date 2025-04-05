let user = { id: 1, name: "Alice", job: "Developer" };

//  for문을 사용해서 name을 제외한 정보들을 출력하는 코드를 작성해보세요.

//  목표 결과:
//  id: 1
//  job: Developer

for (key in user) {
  let a = user[key];

  if (a === "Alice") continue;

  console.log(`${key}: ${a}`);
}
