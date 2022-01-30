Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const carrinho = [
    { nome: "Notebook", preco: 2999, fragil: true },
    { nome: "iPad", preco: 4199, fragil: true },
    { nome: "Copo de Vidro", preco: 12.45, fragil: true },
    { nome: "Copo de Plástico", preco: 10.45, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter2(caro).filter2(fragil))
