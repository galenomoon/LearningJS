// ES8: Obj.values/entries

const obj = { a: 1, b: 2, c: 2 }
console.log(Object.values(obj)); //Only values
console.log(Object.entries(obj)); // Key and values

// Melhorias na notação literal

const nome = 'Luana'
const pessoa = {
    nome,
    ola() {
        return 'Salve'
    }
}

console.log(pessoa.nome, pessoa.ola());

// Class

class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'au au!'
    }
}
console.log(new Cachorro().falar());