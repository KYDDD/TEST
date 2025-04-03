const food = "pasta"; // risotto, burger, suchi 등으로 변경

// food 에 이름이 들어간 음식이 속하는 카테고리를 출력하는 함수 switch  문을 작성하세요. 조건은 아래와 같습니다.
// ‘pizza’와 ‘risotto’, ‘pasta’는 ‘Italian’으로,
// ‘burger’는 ‘American’으로,
// 기타 음식은 ‘Unknown’으로 분류됩니다.

switch (food) {
  case "pasta":
  case "pizza":
  case "risotto":
    console.log("Italian");
    break;
  case "burger":
    console.log("American");
    break;
  default:
    console.log("Unknown");
}
