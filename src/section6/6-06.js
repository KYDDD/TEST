// 인자로 연, 월, 일을 숫자로 받아 해당 날짜가 주말인지 여부를 Boolean으로 반환하는 함수를 작성해보세요.
function isWeekend(year, month, day) {
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
}

// 사용 예시
console.log(isWeekend(2023, 11, 3)); // false
console.log(isWeekend(2023, 11, 4)); // true
console.log(isWeekend(2023, 11, 5)); // true
