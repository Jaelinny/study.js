//구조 분해 할당
//배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript

//변수 교환
let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a, b); //3 1

//일부 반환 값 무시
function f() {
    return [1, 2, 3];
}
const [a, , b] = f();
console.log(a, b); // 1 3

//나머지를 할당하기
const a, b, rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest); //10 20 [30, 40, 50]
