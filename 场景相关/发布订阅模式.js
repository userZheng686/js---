class Bus{
    constructor(){
        this.cache = {}
    }

    emit(key){
        this.cache[key].forEach(item => {
            item()
        })
    }

    on(key,callback){
        if(this.cache[key]){
            this.cache[key].push(callback)
        }else{
            this.cache[key] = [callback]
        }
    }

    off(key,callback){
        delete this.cache[key]
        callback()
    }
}

const bus = new Bus()
bus.on('two',() => {console.log(1)})
bus.on('two',() => {console.log(2)})
bus.emit('two')