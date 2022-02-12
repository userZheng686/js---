/**
 * 运用共享技术有效地支持大量细粒度对象的复用。
 系统只使用少量的对象，而这些对象都很相似，状态变化很小，可以实现对象的多次复用。
 由于享元模式要求能够共享的对象必须是细粒度对象，因此它又称为轻量级模式，它是一种对象结构型模式
 */

// 模特类
class Modal {
    constructor(name, gender, clothes) {
        this.name = name
        this.gender = gender
        this.clothes = clothes
    }

    takePhoto() {
        console.log(`${this.gender}模特${this.name}穿${this.clothes}拍了张照`)
    }
}

// 穿衣拍照实现
for (let i = 0; i < 50; i++) {
    let manModel = new Modal(`张${i}`, '男', `服装${i}`)
    manModel.takePhoto()
}

for (let i = 50; i < 100; i++) {
    let womanModel = new Modal(`李${i}`, '女', `服装${i}`)
    womanModel.takePhoto()
}

/**重构后 */
//构建享元对象
class ReModal{
    constructor(id,gender){
        this.gender = gender
        this.name = `张${gender}${id}`
    }
}

//构建享元工厂
class ModalFactory{
    //单例模式
    static create(id,gender){
        if(this[gender]){
            return this[gender]
        }
        return this[gender] = new ReModal(id,gender)
    }
}

//管理外部状态
class TakeClothesManager{
    //添加衣服款式
    static addClothes(id,gender,clothes){
        const modal = ModalFactory.create(id,gender)
        this[id] = {
            clothes,
            modal,
        }
    }
    //拍照
    static takePhoto(id){
        const obj = this[id]
        console.log(`${obj.modal.gender}模特${obj.modal.name}穿${obj.clothes}拍了张照`)
    }

}

for (let i = 0; i < 50; i++) {
    TakeClothesManager.addClothes(i, '男', `服装${i}`)
    TakeClothesManager.takePhoto(i)
}

for (let i = 50; i < 100; i++) {
    const {addClothes, takePhoto} = TakeClothesManager
    TakeClothesManager.addClothes(i, '女', `服装${i}`)
    TakeClothesManager.takePhoto(i)
}