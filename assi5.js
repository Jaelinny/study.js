//객체구조분해할당
//기본값 할당
const {a= 10, b= 5} = {a:3};
console.log(a, b); //3 5

//기본값 갖는 새로운 이름의 변수에 할당
const {a:aa = 10, b:bb = 5} = {a: 3};
console.log(aa, bb); // 3 5

//나머지 분해 할당
const {a, b, ...rest} = {a:10, b:20, c:30, d:40};
console.log(a, b); // 10 20
console.log(rest); // {c:30, d:40});
