// ### 1.

// 50% 확률로 ‘홀’ 또는 ‘짝’을 반환하는 비동기 작업이 있습니다. 이를 세 번 연속으로 사용하여 그 결과를 쉼표로 구분한 문자열로 받아오려 합니다. 예를 들면 ‘홀, 짝, 홀’, ‘짝, 짝, 홀’과 같은 결과가 3초 후 출력되는 것입니다.
// 이와 같은 작업을 **콜백이 중첩된** 코드로 작성해보세요.

const time = 1000; // 각 호출마다 1초씩, 총 3초

function yabawe(str, nextFunc) {
  setTimeout(() => {
    const result = Math.random() > 0.5 ? "홀" : "짝";
    console.log(result);

    // 결과 문자열 만들기 (첫 번째 호출이면 그냥 결과 사용, 아니면 쉼표와 함께 연결)
    const newStr = str === "" ? result : str + ", " + result;

    // 옵셔널 체이닝을 사용해 nextFunc 호출
    nextFunc?.(newStr);
  }, time);
}

// 콜백 중첩 구현 (콜백 지옥의 예시)
yabawe("", (result1) => {
  yabawe(result1, (result2) => {
    yabawe(result2, (finalResult) => {
      console.log("최종 결과:", finalResult); // 세 번째 호출 결과
    });
  });
});
