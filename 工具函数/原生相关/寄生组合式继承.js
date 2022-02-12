/**
三步骤
var prototype = parent.prototype
prototype.constructor = child
child.prototype = prototype
 */
function parents(params) {
    this.name = 'parent'
}

parents.prototype.getName = function() {
    console.log(this.name)
}


function child(params) {
    this.name = 'child'
}


let extend = function(parent,child) {
    let prototype = parent.prototype
    prototype.constructor = child
    child.prototype = prototype
    return child
}

extend(parents,child)
console.log(new child().getName())