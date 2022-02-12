let arr = ["hdcms", "houdunren", "hdcms"];

Array.prototype.findIndex2 = function(callback,thisArg){
    let res = null,
        obj = Object(this)
    
    for(let [key,val] of Object.entries(obj)){
        if(callback.call(thisArg,val,key,obj)){
            res = key;
            break;
        }
    }


    return res
}

let find = arr.findIndex2(function(item,index,arr) {
  console.log(item,index,arr)
  return item == "houdunren";
});

console.log(find); //hdcms