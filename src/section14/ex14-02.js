// ### 2.

// 위 1번의 코드를 **Promise**를 사용해서 다시 작성해보세요.

const time = 1000; // 각 호출마다 1초씩, 총 3초

function yabawe(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.random() > 0.5 ? "홀" : "짝";
      console.log(result);

      const newStr = str === "" ? result : str + ", " + result;
      resolve(newStr);
    }, time);
  });
}

yabawe("")
  .then((result) => yabawe(result))
  .then((result) => yabawe(result))
  .then((result) => console.log(result));
