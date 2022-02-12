/**
 * 动态地给某个对象添加一些额外的职责，，是一种实现继承的替代方案
 * 在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求，而不会影响从这个类中派生的其他对象
 */

function taxi(target){
    target.car = 'taxi'
}

function fire(target){
    target.car = 'fire'
}

function mail(target){
    target.car = 'mail'
}

let carType = {
    taxi,fire,mail
}

class Car{
    constructor(car){
        this.car = car
    }

}

function mixins(target,args){
    Object.keys(args).forEach((item) => {
        target.prototype[item] = args[item]
    })
}

mixins(Car,carType)
console.log(Car)