/**
思路：


1、首先深克隆一份obj1


2、循环拿出obj2中的每一项与克隆的obj1比较，

如果当前拿出这一项是对象数据类型 并且 克隆的obj1 中相同属性名对应的也是对象数据类型的值，

再次进行深比较，用递归处理一下即可；


其余情况都直接用obj2的值替换obj1的值即可；


 */
let obj1 = {
    name: '小芝麻',
    age: 10,
    teacher: {
        0: '张三',
        1: '李四'
    }
};

let obj2 = {
    age: 20,
    school: "北京",
    teacher: {2: "王五"}
};


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

let _assignDeep = (obj1,obj2) => {
    let copyObj = deepClone2(obj1)
    
    for(let [key,val] of Object.entries(obj2)){
        if(!copyObj[key]) copyObj[key] = val
        else{
            if(typeof copyObj[key] === 'object' && typeof val === 'object'){
                copyObj[key] = _assignDeep(copyObj[key],val);
            }else{
                copyObj[key] = val
            }
        }
    }
    return copyObj
}

let obj3 = _assignDeep(obj1,obj2)

console.log(obj3)

obj2.teacher = {}

console.log(obj3)
