const p = Promise.resolve(1)
const p1 = Promise.resolve(2)
const p2 = Promise.reject(3)

const p4 = Promise.allSettled([p,p1,p2]).then(res => {
    console.log(res)
})