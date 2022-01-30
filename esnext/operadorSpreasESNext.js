// operador ... rest (juntar)/spread(espalhar)
// usar rest com param de function

// usar spread com obj
const employee = { name: "Gusta", wage: 4000 }
const clone = { active: true, ...employee } //...employee === ...name: "Gusta", salario: 4000}
console.log(clone); //{active: true, name: "Gusta", wage: 4000}

//usar spread com array
const groupA = ['Gusta', 'Galeno', 'Luana']
const groupFinal = ['Isa', 'Apollo', ...groupA]
console.log(groupFinal);