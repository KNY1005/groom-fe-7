const array1 = [1, 2, 3, 4, 5];

// 아래 출력 결과처럼 나오도록 코드를 작성하세요.
//reduce() 를 사용하여 홀수만 구분하여 더해주기
const summOdd = array1.reduce((acc, cur) => {
  if (cur % 2 !== 0) {
    return acc + cur;
  } else {
    return acc;
  }
}, 0);


console.log(summOdd); // 9



const foods = ["비빔밥", "칼국수", "라면", "쌀국수"]
const drinks = ["제로콜라", "일반콜라", "맥주"]

// 주문은 Foods -> Drinks 순서로 받습니다.
// 1. 메뉴 주문 받기
// - foods 메뉴를 prompt 를 활용하여 1개 입력 받습니다.
//     - foods 에 있는 메뉴여야 drink 를 선택할 수 있습니다.
//     - foods 에 없다면 “그런 메뉴 없습니다.” 를 띄워주세요.
// - drinks 메뉴를 1개 입력 받습니다.
//     - drinks 에 있는 메뉴라면 “(선택한메뉴)와/과 (선택한음료)를 준비해드리겠습니다” 를 띄우세요
//     - drinks 에 없다면 “그런 음료 없습니다.” 를 띄워주세요.

let foodOrder = prompt(`음식을 선택해주세요: ${foods.join(", ")}`);

if (foods.includes(foodOrder)) {
  let drinkOrder = prompt(`음료를 선택해주세요: ${drinks.join(", ")}`);
  if (drinks.includes(drinkOrder)) {
    alert(`${foodOrder}와/과 ${drinkOrder}를 준비해드리겠습니다`);
  } else {
    alert("그런 음료 없습니다.");
  }
} else {
  alert("그런 메뉴 없습니다.");
}