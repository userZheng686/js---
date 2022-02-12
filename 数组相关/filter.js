Array.prototype.filter2 = function(callback,thisArg){
    const _this = Object(this);
    const res = []

    _this.forEach((item,index,array) => {
        if(callback.call(thisArg,item,index,array)){
            res.push(item)
        }
    })    

    return res
}

// @ts-ignore
console.log([1,2,3].filter((item,index,array) => {
    console.log('item',item,'index',index,'array',array)
    return item > 2
}))