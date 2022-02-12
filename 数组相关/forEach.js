Array.prototype.forEach2 = function(callback,thisArg){
    let res = [],
        _this = this;
    
    for(let i = 0;i<_this.length; i++){
        callback.call(thisArg,_this[i],i,_this)
    }
}

// @ts-ignore
console.log([1,2,3].forEach2((item,index,array) => {
    console.log('item',item,'index',index,'array',array)
}))