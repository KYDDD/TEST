/* ### 1.

인자로 주어진 문자열에서 첫 번째 대문자를 찾아 로그로 출력하는 함수를 작성해보세요. 문자열에는 알파벳만 포함된다고 가정합니다. */

function findFirstCapital(str) {
  const index = str.search(/[A-Z]/);
  return str[index];
}

console.log(findFirstCapital("helloWorld"));
