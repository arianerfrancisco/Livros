// Tipos não definidos
var nome; // não inicializada - retorno undefined.

console.log(nome)
console.log(nome == undefined)
console.log(typeof(nome) == "undefined")

// Array - percorrendo seus valores

console.log('Utilizando laço')

const numeros = [1,2,3,4,5,6,7]
function testeArray() {
    for(let i = 0 ; numeros.length > i ; i++) {
    console.log(numeros[i]);
    }
}
testeArray()

function testeArray2 () {
    for (let i in numeros) {
        console.log(numeros[i])
    }
}
testeArray2()

console.log('Utilizando map(callback)')

num = numeros.map( n => n)
console.log(num)

/* Programação funcional: no js e node funções são aceitas como parâmetros de outra funções
Declaração de variáveis
let: a variável se encapsula dentro do seu contexto, tornando-se invisível no escopo global.
var: possui escopo elevado - "hoisting" - pode ser utilizada antes mesmo de ser declarada e fora do seu contexto */
