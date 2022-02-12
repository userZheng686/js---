//为子系统的一组接口提供一个一致的界面，定义了一个高层接口，这个接口使子系统更加容易使用

class Shape{
    constructor(shape){
        this.shape = shape
    }
}

class Rectangle extends Shape{
    constructor(){
        super()
    }

    draw(){
        console.log('Rectangle::draw()')
    }
}

class Square extends Shape{
    constructor(){
        super()
    }

    draw(){
        console.log('Square::draw()')
    }
}

class Circle  extends Shape{
    constructor(){
        super()
    }

    draw(){
        console.log('Circle::draw()')
    }
}

class ShapeMaker{
    rectangle = new Rectangle()
    square = new Square()
    circle = new Circle()
    
    drawCircle(){
      this.circle.draw();
    }
    drawRectangle(){
      this.rectangle.draw();
    }
    drawSquare(){
      this.square.draw();
    }

}

function FacadePatternDemo(){
    let shapeMaker = new ShapeMaker()
    shapeMaker.drawCircle();
    shapeMaker.drawRectangle();
    shapeMaker.drawSquare();
}