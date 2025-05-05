class Obj1 {
  constructor(name) {
    this.name = name;
    this.arrowFunc = () => this.name;
  }
  normFunc() {
    return this.name;
  }
}

class Obj2 {
  constructor(name) {
    this.name = name;
  }
}

const obj1 = new Obj1("Apple");
const obj2 = new Obj2("Banana");

obj2.arrowFunc = obj1.arrowFunc;
obj2.normFunc = obj1.normFunc;

console.log(obj2.arrowFunc(), obj2.normFunc());

//  어떤 값이 출력될까요?
// 일반 함수나 메소드의 this는 동적으로, 화살표 함수의 this는 동적으로 바인딩됩니다.
