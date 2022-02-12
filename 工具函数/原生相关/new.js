let news = function(params,...args) {
    let obj = Object.create(params.prototype)
    params.apply(obj,args)
    return obj
}

let b2 = function(b) {
    this.b = b
    this.name = '123'
}

console.log(news(b2,b=2))