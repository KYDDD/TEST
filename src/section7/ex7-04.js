const users = [
  { name: "Alice", job: "developer" },
  { name: "Bob", job: "designer" },
  { name: "Charlie", job: "developer" },
  { name: "David", job: "manager" },
  { name: "Eve", job: "developer" },
];

const count = {
  developer: 0,
  designer: 0,
  manager: 0,
};
//  사용자가 직업별로 몇 명이 있는지 객체로 반환하는 코드를 작성해보세요.
//  목표 결과: {developer: 3, designer: 1, manager: 1}
["developer", "designer", "manager"].forEach((category) => {
  count[category] = users.filter(({ job }) => job === category).length;
});

console.log(count);
