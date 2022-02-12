let a2 = {
    name : 1
}

let a3 = function(params) {
    console.log(this.name)
}

Function.prototype.bind2 = function(params) {
    let context = Array.from(arguments)[0]
    let args = Array.from(arguments)
    let self = this
    return function() {
        args = args.concat(Array.from(arguments))
        self.apply(this instanceof self ? context : self,args)
    }   
}


