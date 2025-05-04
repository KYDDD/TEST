// 위와 같은 배열이 있습니다. 배열은 빈 배열일 수도 있고 위와는 다른 내용의 값들이 들어 있을 수도 있습니다. 배열의 내용을 모르는 상태에서, 배열의 첫번째 객체가 name 프로퍼티를 갖고 있을 시 그 값을 모두 대문자로 출력하고 배열이 비었거나 첫 값의 형태가 다르다면 오류 없이 undefined 를 출력하는 코드를 작성해보세요.

const products = [
  { name: "Phone", price: 700 },
  { name: "Tablet", price: 900 },
];

//  배열의 내용이 아래와 같이 다를 수도 있음
//  []
//  [1, 2, 3]

console.log(products[0]?.name?.toUpperCase());
