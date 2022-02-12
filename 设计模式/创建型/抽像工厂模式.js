/**
抽象工厂不但工厂是抽象的，产品也是抽象的，而且有多个产品需要创建，因此，这个抽象工厂会对应到多个实际工厂，
每个实际工厂负责创建多个实际产品. 抽线工厂是用来解决比较复杂的问题的.
接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。
 */

/**
 * 计算机-抽像产品类
 */
class Computer{
    //生产电脑类
    productComputer(){}
}

/**
 * 鼠标-抽像产品类
 */
class Mouse{
    //生产鼠标类
    productMouse(){}
}

/**pc端计算机具体产品类 */
class PcComputer extends Computer{
    productComputer(){
        console.log('Pc端计算机')
    }
}

/**Server端计算机具体产品类 */
class ServerComputer extends Computer{
    productComputer(){
        console.log('Server端计算机')
    }
}

/**pc端计算机具体产品类 */
class GameMouse  extends Computer{
    productMouse(){
        console.log('游戏鼠标')
    }
}

/**Server端计算机具体产品类 */
class OfficeMouse  extends Computer{
    productMouse(){
        console.log('办公鼠标')
    }
}