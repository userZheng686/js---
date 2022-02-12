//一个类只有一个实例，并提供一个访问它的全局访问点。
class LoginForm{
    constructor(){
        this.state = 'hide'
    }

    show(){
        if(this.state === 'show'){
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框显示成功')
    }

    hide(){
        if(this.state === 'hide'){
            alert('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框隐藏成功')
    }

    static getInstance(){
        let instance 
        return function(){
            if(!instance){
                instance = new LoginForm()
            }
            return instance
        }
    }
}

