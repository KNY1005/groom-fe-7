function unique(arr) {
  /* 제출 답안 */
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;

}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // 출력 결과로 `Hare, Krishna, :-O` 만 출력되어야 합니다.
// 예상 결과: Hare, Krishna, :-O

// /* 다른 사람의 풀이 1 */
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// /* 다른 사람의 풀이 2 */
// function unique(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// /* 다른 사람의 풀이 3 */
// function unique(arr) {
//   return arr.reduce((uniqueArr, item) => {
//     if (!uniqueArr.includes(item)) {
//       uniqueArr.push(item);
//     }
//     return uniqueArr;
//   }, []);
// }
// /* 다른 사람의 풀이 4 */
// function unique(arr) {
//   const uniqueArr = []; 
//   for (const item of arr) {
//     if (uniqueArr.indexOf(item) === -1) {
//       uniqueArr.push(item);
//     }
//   }
//   return uniqueArr;
// }
// /* 다른 사람의 풀이 5 */
// function unique(arr) {
//   const seen = {};
//   const uniqueArr = [];
//   for (const item of arr) {
//     if (!seen[item]) {
//       seen[item] = true;
//       uniqueArr.push(item);
//     }
//   }
//   return uniqueArr;
// }
// /* 다른 사람의 풀이 6 */
// function unique(arr) {
//   const uniqueArr = [];
//   arr.forEach(item => {
//     if (!uniqueArr.includes(item)) {
//       uniqueArr.push(item);
//     }
//   });   
//   return uniqueArr;
// }
// /* 다른 사람의 풀이 7 */
// function unique(arr) {
//   const uniqueArr = []; 
//   for (let i = 0; i < arr.length; i++) {
//     let found = false;
//     for (let j = 0; j < uniqueArr.length; j++) {
//       if (arr[i] === uniqueArr[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// }