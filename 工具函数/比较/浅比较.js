//Object.assign
let obja = {
    a : '123',
    b : '456', 
    c : '789'
}

let objb = {
    c : '000',
    d : '456'
}

console.log(Object.assign(obja,objb))
//{ a: '123', b: '456', c: '000', d: '456' }