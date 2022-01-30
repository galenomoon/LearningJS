const alunos = [
    { nome: "Galeno", nota: 9.7, bolsista: false },
    { nome: "Lua", nota: 9.2, bolsista: true },
    { nome: "Victor", nota: 8.3, bolsista: false },
    { nome: "Gusta", nota: 10, bolsista: true },
]

// todos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));


//há algum bolsista ?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));
