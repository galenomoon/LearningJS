//arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3));

//arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// param default
function log(text = 'Node') {
    console.log(text);
}
log()
log('sou mais forte')

// operador rest
function total(...numbers) {
    let total = 0
    numbers.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5));