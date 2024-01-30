//배열을 순회하며 callback의 결과값이 모두 true인 경우 true, 그렇지 않을 경우 false를 반환합니다.

const array = [1, 2, 3, 4, 5]
console.log(array.every(n => n > 0)); // true
console.log(array.every(n => n > 4)); // false

