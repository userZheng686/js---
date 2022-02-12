Array.prototype.map2 = function(callback,thisArg){
    let res = [],
        _this = Object(this)
    
    _this.forEach((item,index,array) => {
        res.push(callback.call(thisArg,item,index,array))
    })

    return res
}

// @ts-ignore
console.log([1,2,3].map2((item,index,array) => {
    console.log('item',item,'index',index,'array',array)
    return {
        name : item,
        index
    }
}))