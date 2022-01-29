let compareComThis = function (param) {
    console.log(this === param);
}
compareComThis(global) // true


const obj = {}
comparaComThis = comparaComThis.bind(obj)
compareComThis(global) // false
compareComThis(obj) // true

let compareComThisArrow = param => console.log(this === param);
compareComThisArrow(global) // true
compareComThisArrow(module.exports) // true

compareComThisArrow = compareComThisArrow.bind(obj)
compareComThisArrow(obj) //false
compareComThisArrow(module.exports) //true