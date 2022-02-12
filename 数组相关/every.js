const user = [
  { name: "李四", js: 89 },
  { name: "马六", js: 55 },
  { name: "张三", js: 78 }
];

Array.prototype.every2 = function(callback,thisArg){
    let res = true,
        obj = Object(this)
    
    obj.forEach((item,index,arr) => {
        if(!callback.call(thisArg,item,index,arr)) res = false
    })

    return res
}

const resust = user.every2(user => user.js >= 10);
console.log(resust);