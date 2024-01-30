Default parameter는 꼭 뒤에 올 필요가 없음.
디폴트 인자 뒤 기본값이 없는 인자가 올 수 있고 이때 인자의 기본값은 undefuned입니다.

function fn(a = 1, b) {
    console.log("a", a, "b", b);
}
fn(); //a 1 b undefined
