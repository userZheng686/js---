const objA = {
  name: 'jack',
  s2 : [1,[2,3,4]],
  birthday: new Date(),
  pattern: /jack/g,
  body: new Date(),
  s : function(){},
  others: [123,'coding', new Date(), /abc/gim,{c:1}]
};

let deepClone = function(obj){
    let res = (obj instanceof Array) ? [] : {}
    if(typeof obj !== 'object') return
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(!(key in res)){
                if(obj[key] instanceof Date){
                    res[key] = new Date(obj[key].getTime())
                }else if(obj[key] instanceof RegExp){
                    res[key] = new RegExp(obj[key])
                }else if((typeof obj[key] === 'object') && obj[key].nodeType === 1 ){
                    // 判断 DOM 元素节点
                    let domEle = document.getElementsByTagName(obj[key].nodeName)[0];
                    res[key] = domEle.cloneNode(true);
                }else{
                    res[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
                }
            }
        }
    }
    return res
}

let deepClone2 = (obj) => {
    if(obj === null) return null
    if(typeof obj !== 'object') return obj
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof RegExp) return new RegExp(obj)
    let cloneObj = new obj.constructor
    for(let [key,val] of Object.entries(obj)){
        cloneObj[key] = val
    }
    return cloneObj
}


let d2 = deepClone(objA)
let d3 = deepClone2(objA)
console.log(d3)
objA.s2 = [4,5,6]
console.log(d3)