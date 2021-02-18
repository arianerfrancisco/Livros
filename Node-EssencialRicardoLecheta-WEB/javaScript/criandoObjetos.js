// Criando a partir da palavra reservada Object()
function objeto1 () {
    var pessoa = Object();
    pessoa.nome = "Ser Humano";
    pessoa.sobrenome = "Sobrenome de Ser Humano"
    pessoa.hello = function () {
        return "Oi";
    }
    console.log(pessoa.nome)
    console.log(pessoa.sobrenome)
    console.log(pessoa.hello())
}
objeto1()

// Criando a partir de uma variável

function objeto2 () {
    var pessoa = {
        nome: "Ser Humano",
        sobrenome: "Sobrenome de Ser Humano",
        hello: function () {
            return "Oi";
        }
    }
    console.log(pessoa.nome)
    console.log(pessoa.sobrenome)
    console.log(pessoa.hello())
}
objeto2()

// criando  a partir de uma função com o nome da classe/objeto

function Pessoa() {
    this.nome = "Ser Humano";
    this.sobrenome = "Sobrenome de Ser Humano";
    this.hello = function () {
        return "Oi";
    }
}
function objeto3() {
    var pessoa = new Pessoa();
    console.log(pessoa.nome)
    console.log(pessoa.sobrenome)
    console.log(pessoa.hello())
}

objeto3()

// Utilizando a palavra reservada class - especificação ECMAScript 2015

class Pessoa1 {
    constructor() {
        this.nome = "Ser Humano";
        this.sobrenome = "Sobrenome de Ser Humano";
    }
    hello() { 
        return "Oi";
    }
}

function objeto4() {
    var pessoa = new Pessoa1();
    console.log(pessoa);
    console.log(pessoa.sobrenome);
    console.log(pessoa.hello());
}
objeto4(); 

class Pessoa2 {
    static hello() { // utilizando a palavra reservada static a funcao poderá ser chamada sem precisar que instancie um novo objeto com new
        return "Oi";
    }
}
console.log(Pessoa2.hello())