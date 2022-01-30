// let e const

{
    var a = 2
    let b = 3 //escopo de bloco
    console.log(b); //3
}
console.log(a);

console.log(b); //undefined

//Template String

const nome = 'Galeno'
console.log(`Meu nome é ${nome}, prazer.`);

//Destructuring
const [l, e, ...tras] = 'Galeno'
console.log(l, e, tras);

const [x, , y] = [1, 2, 3]
console.log(x, y);

const { idade, nome } = { nome: 'Galeno', idade: 19 }
console.log(i, nome);