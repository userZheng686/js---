/**浅拷贝实现有三种方式 
 1.Object.assign
 2.array.concat
 3.JSON.stringify
 */

let a = {
    b : 1
}

let b = {
    c : 2
}

Object.assign(a,b)

let c = [1,2]
let d = c.concat([3,4,5])
console.log(d)