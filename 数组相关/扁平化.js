//实现数组的flat方法

Array.prototype.flat2 = function(){
    let newResult = []

    const flatten = (arr) => {
        arr.forEach((a) => {
            Array.isArray(a) ? flatten(a) : newResult.push(a)
        })
    }

    flatten(this)

    return newResult
}

console.log([1,[2,[3,[4]]]].flat2())
