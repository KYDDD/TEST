const array = ["apple", "banana", "apple", "orange", "banana", "apple"];

//  위 배열의 요소들이 각각 몇 개씩 들어있는지를 나타내는
//  Map 인스턴스를 만드는 코드를 작성해보세요.

//  그 중 'apple'은 몇 개인지 출력해보세요.

//  개수가 가장 적은 순으로 출력해보세요.

const countMap = new Map();

array.forEach((item) => {
  countMap.set(item, (countMap.get(item) || 0) + 1);
});

console.log(countMap.get("apple"));
