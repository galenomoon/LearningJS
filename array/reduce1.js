const alunos = [
    { nome: "Galeno", nota: 9.7, bolsista: false },
    { nome: "Lua", nota: 9.2, bolsista: true },
    { nome: "Victor", nota: 8.3, bolsista: false },
    { nome: "Gusta", nota: 10, bolsista: true },
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual;
}, 0)

console.log(resultado);