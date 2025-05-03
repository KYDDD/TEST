/* ### 2.

인자로 주어진 문장에 포함된 모든 단어들의 마지막 글자를 출력하는 함수를 작성해보세요. */

function printLastChars(str) {
  const splitStr = str.split(" ");
  for (let i of splitStr) {
    console.log(i.at(-1));
  }
}

printLastChars("Hello world from JavaScript");
