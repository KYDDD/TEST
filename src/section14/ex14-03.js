// ### 3.

// 이번에는 **async & await**을 사용하는 코드로 다시 작성해보세요.
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

async function doAsyncWorks() {
  const result1 = await yabawe("");
  const result2 = await yabawe(result1);
  const result3 = await yabawe(result2);
  console.log(result3);
}

doAsyncWorks();
