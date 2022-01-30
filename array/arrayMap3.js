Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(this[i], i, this)
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Borracha", "preco": 3.45}'
]

const toJson = json => JSON.parse(json)
const precos = produto => produto.preco

const resultado = carrinho.map2(toJson).map2(precos)
console.log(resultado);