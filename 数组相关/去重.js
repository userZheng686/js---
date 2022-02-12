let arr = [1,2,3,3]

let duplicate = (arr) => {
    let obj = {},newArr = []
    arr.forEach(a => {
        if(!obj[a]) {
            newArr.push(a)
            obj[a] = true
        }
    })
    return newArr
}

console.log(duplicate(arr))