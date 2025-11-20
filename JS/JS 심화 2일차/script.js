
//1번
//인자로 전달된 숫자들을 모두 받아 평균을 구하는 함수를 작성하세요.
//단, 인자가 하나도 없을 경우 "값이 없습니다"를 출력해야 합니다.

average(10, 20, 30, 40);
average();

//내가 푼 것
function average(...numbers) {
    if (numbers.length === 0) {
        console.log("값이 없습니다");
        return;
    }
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }

    let avg = sum / numbers.length;
    console.log("평균:", avg);
} 

//강사님 풀이
function average(...numbers) {
    if (numbers.length === 0) return "값이 없습니다";
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum / numbers.length;
}

console.log(average(10, 20, 30, 40)); // 25
console.log(average()); // "값이 없습니다"

//2번
//두 개의 객체를 받아 user 기본 정보와 추가 정보를 합쳐 새로운 객체를 만들어 반환하세요.
//단, 중복되는 키가 있을 경우 두 번째 객체의 값이 우선합니다.

// 예시 입력
//const base = { id: 1, name: "Lisa", age: 23 };
//const extra = { age: 24, country: "Korea" };

//mergeUser(base, extra);

// 예시 출력
//{ id: 1, name: "Lisa", age: 24, country: "Korea" }

//내가 푼 것
const user = { id: 1, name: "Lisa", age: 23 };
const extra = { age: 24, country: "Korea" };

function mergeUser(user, extra) {
    return { ...user, ...extra };
}

console.log(mergeUser(user, extra)); 
//{id: 1, name: 'Lisa', age: 24, country: 'Korea'}


//3번
//아래 배열에서 가장 큰 값을 구하세요. 만약, 빈 배열일 경우 null을 반환해야합니다.
// 예시 입력
//const scores = [85, 92, 88, 100, 76];
//maxValue(scores);

// 예시 출력
//100

//내가 푼 것
const scores = [85, 92, 88, 100, 76];

function maxValue(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
}

console.log(maxValue(scores)); //100


//실습 4번
// 매개변수로 객체를 넘겨주는데 구조 분해를 사용하여 함수를 만들어주세요.
// firstNumber과 secondNumber을 더한 값을 return 해주는 함수

function sum({firstNumber, secondNumber}) {
  return firstNumber + secondNumber
}

const result = sum({firstNumber: 1, secondNumber: 2})
console.log(result) // 3




// userService.js
const API_URL = "https://api.example.com";

function getUserData() {
  return fetch(`${API_URL}/users`);
}

console.log("유저 데이터 가져오기:", getUserData()); 


