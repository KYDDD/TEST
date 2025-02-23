//spread
//객체에서 사용했을 때
// const toy = {
//   type: "bear",
//   price: 15000,
// };

// const blueToy = {
//   ...toy,
//   color: "blue",
// };

// const yellowToy = {
//   ...toy,
//   color: "yellow",
// };

// console.log(blueToy);
// console.log(yellowToy);

//배열에서 사용할 때
// const color1 = ["red", "orange", "yellow"];
// const color2 = ["blue", "navy", "purple"];

// const rainbow = [...color1, "green", ...color2];

// console.log(rainbow);

//rest
//객체에서 사용했을때
// const blueToy = {
//   type: "bear",
//   price: 15000,
//   color: "blue",
// };

// const { type, ...rest } = blueToy;

// console.log(type);
// console.log(rest);

//배열에서 사용했을때
// const color = ["red", "orange", "yellow", "green"];

// const [c1, c2, ...rest] = color;

// console.log(c1, c2);
// console.log(rest);

//함수에서 rest문법을 사용했을 때때
// const print = (a, b, ...rest) => {
//   console.log(a, b, rest);
// };

//함수에서 spread, rest사용
const print = (...rest) => {
  console.log(rest);
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
print(...numbers);
