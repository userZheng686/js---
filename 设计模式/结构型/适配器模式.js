//将一个类的接口转化为另外一个接口，以满足用户需求，使类之间接口不兼容问题通过适配器得以解决。
class Plus{
    getName(){
        return 'iphone充电头'
    }
}

class Target{
    constructor(){
        this.plus = new Plus()
    }

    getName(){
        return this.plus.getName() + '适配器Type-c充电头'
    }
}