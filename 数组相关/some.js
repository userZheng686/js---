Array.prototype.some2 = function(callback,thisArg){
    let res = false,
        obj = Object(this)
    
    obj.forEach((item,index,array) => {
        if(callback.call(thisArg,item,index,array)){
            res = callback.call(thisArg,item,index,array)
        }
    })

    return res
}

let words = ['后盾', '北京', '武汉'];
let title = '后盾人不断分享技术教程'

let state = words.some2(function (item, index, array) {
	return title.indexOf(item) >= 0;
});

console.log(state)