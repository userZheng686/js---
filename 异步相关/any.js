const p = Promise.reject(1)
const p1 = Promise.resolve(2)
const p2 = Promise.reject(3)

const p4 = Promise.any([p,p1,p2]).then(res => {
    console.log(res)
})