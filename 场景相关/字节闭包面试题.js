/*
var foo = function(...args) {
 // 要求实现函数体
}
*/



var foo = (...args) => {
    let target = (...arg) => foo(...[args,arg])
    target.getValue = () => args.reduce((a,b) => a+b,0)
    return target
}

var f1 = foo(1,2,3);
console.log(f1.getValue()); // 6 输出是参数的和
var f2 = foo(1)(2,3);
f2.getValue(); // 6
var f3 = foo(1)(2)(3)(4);
f3.getValue(); // 10