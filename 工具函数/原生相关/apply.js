Function.prototype.apply2 = function(context = globalThis, arr){
    // 设置 fn 为调用 myCall 的方法
    context.fn = this;

    let result;

    // 如果存在参数，则传递进去
    // 将结果返回给 result
    if (arr) {
      result = context.fn(arr);
    } else { // 否则不传
      result = context.fn();
    }

    // 删除这个变量
    delete context.fn;

    // 返回 result 结果
    return result;
}