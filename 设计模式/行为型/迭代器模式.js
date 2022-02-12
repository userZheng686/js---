//提供一种方法顺序一个聚合对象中各个元素，而又不暴露该对象的内部表示。

class iterator{
    constructor(container){
        this.list = container.list
        this.index = 0
    }
    next(){
        if(this.hasNext()){
            return this.list[this.index++]
        }
        return null
    }
    hasNext(){
        if(this.index >= this.list.length){
            return false
        }
        return true
    }

}

class Container{
    constructor(list){
        this.list = list
    }
    getIterator(){
        return new iterator(this)
    }
}

// 测试代码
let container = new Container([1, 2, 3, 4, 5])
let iterators = container.getIterator()
while(iterators.hasNext()) {
  console.log(iterators.next())
}
