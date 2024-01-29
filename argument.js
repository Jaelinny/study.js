function fun1() {
    console.log(arguments);
}
function fun2(...theArgs) {
    console.log(theArgs);
    console.log(theArgs.sort());
}
fun1(2,6,4); //Argument(3) [2, 6, 4, callee: f, Symbol(Symbol.iterator): f]
fun2(2,6,4); //(3) [2,6,4] // (3) [2,4,6]
