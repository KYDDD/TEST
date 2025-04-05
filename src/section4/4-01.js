// 인자로 두 개의 값을 받아 그 중 더 큰 값을 반환하는 함수를 작성해보세요. 1강에서 배운 3가지 형태로 각각 선언해보세요.

function max1(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    console.log("두 값이 같습니다.");
  }
}

max2 = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    console.log("두 값이 같습니다.");
  }
};

max3 = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1);
    return num1;
  } else if (num2 > num1) {
    console.log(num2);
    return num2;
  } else {
    console.log("두 값이 같습니다.");
  }
};
