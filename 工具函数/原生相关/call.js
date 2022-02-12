let a1 = function(a){
    console.log(a)
    console.log(this.name)
}

Function.prototype.call2 = function(gloablContext){
    let args = Array.from(arguments).slice(1)
    gloablContext.fn = this
    let result = gloablContext.fn(args)
    delete gloablContext.fn
    return result
}