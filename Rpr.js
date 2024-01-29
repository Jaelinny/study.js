Rest parameter
나머지 매개변수
매개변수의 개수가 가변적인 정해지지 않은 인자들을 배열로 받을 수 있게 합니다.

function f (x, y, ...a) {
    return (x + y) * a.length;
}
f(1,2) //0
f(1,2, "helllo", true, 7) //9


ES5 방식
function f (x, y) {
    var a = Array.prototype.slice.call(argument, 2);
    return (x + y) * a.length;
};
f(1, 2, "hello", true, 7) //9
