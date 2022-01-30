//Map transforma arrays, em outro array com outros valores

const nums = [1, 2, 3, 4, 5]

// for com propósito
let resultado = nums.map(function (e) { //For Each value (e), *2
    return e * 2 //[2, 4, 6, 8, 10]
})

console.log(resultado, nums);


const soma10 = e => e + 10
const triplo = e => e * 3
const toMoney = e => e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(toMoney)
console.log(resultado);