let str = 'hellol'

let countStr = (str) => {
    let count = {},
        max = 0
    str = Array.from(str)
 
    str.forEach(item => {
        if(count[item] === undefined) count[item] = 0
        else {
            count[item] += 1
            if(max < count[item]) max = count[item]
        }
    })

    return max
}

console.log(countStr(str))