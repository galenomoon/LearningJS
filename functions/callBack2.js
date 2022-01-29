const notas = [10, 6.5, 5.2, 8, 8.2, 3.5, 7.5]

//Sem Callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1);

//Com Callback
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2);

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3);
