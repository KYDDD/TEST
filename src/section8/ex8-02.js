const privates = ["height", "weight"];

const person1 = {
  name: "홍길동",
  sex: "M",
  height: 175,
  weight: 70,
  family: ["부", "모", "누나"],
  profession: {
    job: "developer",
    position: "사원",
    department: "프론트엔드",
  },
};

//  위의 person1 객체를 privates에 속한 프로퍼티를 제외하고
//  깊은 복사를 하는 코드를 작성해보세요.

const obj = JSON.parse(
  JSON.stringify(person1, (key, value) => {
    if (privates.includes(key)) {
      return undefined;
    }
    return value;
  })
);

console.log(obj);
//JSON으로 직렬화 및 파싱하는 과정에서 데이터의 요소들은 깊은 복사와 같은 방식으로 복제됩니다.
//단 함수 및 특정 자료형들은 직렬화되지 않음을 기억하세요.
