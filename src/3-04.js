// for 문을 활용해서 1~20까지의 숫자 중 짝수를 로그에 찍는 코드를 작성하세요.

for (i = 2; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  i % 2 || console.log(i);
}
