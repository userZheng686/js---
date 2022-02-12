let curry = (...x) => {
    let target = (...arg) => curry(...[...x,...arg])
    let sum = () => x.reduce((a,b) => a+b)
    target.toString = () => {
        return sum()
    }
    return target
    
}

console.log(curry(1)(2)(3)(4).toString())