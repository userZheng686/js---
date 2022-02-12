Array.prototype.reduce2 = function(callback,initialValue){
    let obj = Object(this),
        sum = obj[0]
    
    for(let i=1;i<obj.length;i++){
        if(obj[i]){
            sum = callback.call(initialValue,sum,obj[i],i,obj)
        }
    }

    return sum
}

// @ts-ignore
console.log([1,2,3,4,5,6,7,8,9,10].reduce2((accumulator,currentValue,index,array) => {
    console.log('accumulator',accumulator,'currentValue',currentValue,'index',index)
    return accumulator + currentValue
}))