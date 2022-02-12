let arr = ["hdcms", "houdunren", "hdcms"];

Array.prototype.find2 = function(callback,thisArg){
    let res = null,
        obj = Object(this)
    
    for(let [key,val] of Object.entries(obj)){
        if(callback.call(thisArg,val,key,obj)){
            res = val;
            break;
        }
    }


    return res
}

let find = arr.find2(function(item,index,arr) {
  console.log(item,index,arr)
  return item == "hdcms";
});

console.log(find); //hdcms