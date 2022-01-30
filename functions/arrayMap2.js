//Map transforma arrays, em outro array com outros valores

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Borracha", "preco": 3.45}'
]

const toJson = json => JSON.parse(json)
const precos = produto => produto.preco

const resultado = carrinho.map(toJson).map(precos)
console.log(resultado);