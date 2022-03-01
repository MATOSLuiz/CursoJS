// Métodos 

const casa = {
    banheiros: function (numBanheiros){
        if(numBanheiros < 3) {
            console.log("Essa casa não me agrada!");
        } else if(numBanheiros == 3) {
            console.log("Essa quantidade de banheiros é o ideal!");
        } else {
            console.log("Isso só pode ser uma mansão!");
        }
    }
}

casa.banheiros(1);
casa.banheiros(3);
casa.banheiros(8);

console.log("\n");

// Mais sobre métodos e como ele interage com o objeto e outras partes do nosso programa

const computador = {
    processador: "AMD",

    setProcessador: function(processador) {
        this.processador = processador;
    }, 

    getProcessador: function() {
        return "O processador é um: " + this.processador;
    }
}

console.log(computador.processador);

computador.setProcessador("Ryzen 5");

console.log(computador.processador);

console.log(computador.getProcessador());

console.log("\n");

//Prototypes

const person = {
    dedos: 20
}

console.log(Object.getPrototypeOf(person));
console.log(person.hasOwnProperty("dedos"));


//Herança; o objeto newPerson herda as propriedades do objeto person e do Object nativo.
const newPerson = Object.create(person);

console.log(newPerson.dedos);

console.log(Object.getPrototypeOf(newPerson) === person);

console.log("\n");

//Classes

const dog = {
    eyes: 2,
    paws: 4,
    breed: "NDB"
}

let germanShepherd = Object.create(dog);

germanShepherd.breed = "German Sherphed";

console.log(germanShepherd.breed);

console.log("\n")

// Instaciando classe por função constructor com function 

function criarCachorro(raca,cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.cor = cor;
    return cachorro; 
}

let shitzu = criarCachorro("Shi-tzu", "Branco com manchas amarelas");

console.log(shitzu)

console.log("\n");

// Instanciando com o new

function Livro(titulo,numeroPaginas,volume) {
    this.titulo = titulo;
    this.numeroPaginas = numeroPaginas;
    this.volume = volume;
}

let harryPotter1 = new Livro("Harry Potter e a Pedra Filosofal", 250, 1);

console.log(harryPotter1.titulo);

// Métodos no prototype

let harryPotter2 = new Livro("Harry Potter e A Câmara Secreta, 300, 2");

Livro.prototype.autora = "J.K Rowling";

console.log(harryPotter2.autora);

console.log("\n");

// Construtor na classe (ES6)

class Produto {
    constructor(nome,quantidade,valor) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
    }
}

let salgado = new Produto("Esfirra", 2, 3.50);

console.log(salgado);
console.log("\n");

//Override no prototype

class Filme {
    constructor(indicacao) {
        this.indicacao = indicacao;
    }
}

Filme.prototype.indicacao = "Livre para todos os públicos"

let deadpool = new Filme("18+");

console.log(Filme.prototype.indicacao);
console.log(deadpool.indicacao);

console.log("\n")

// Métodos e propriedades em uma classe e Symbol

class Bola {
    constructor(marca,modalidade) {
        this.marca = marca;
        this.modalidade = modalidade;
    }
}

let formato = Symbol();

Bola.prototype[formato] = "Redonda";

let bolaFutsal = new Bola("Adidas", "Futsal");

console.log(Bola.prototype[formato]);

console.log(bolaFutsal[formato]);

console.log("\n")

//Getters e Setters

class Celular {
    constructor(marca,modelo,cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }
}

let samsung = new Celular("Samsung","S22","Sem cor");

console.log(samsung);

samsung.setCor = "Azul Marinho";

console.log(samsung.getCor);

console.log("\n");

// Herança

class Tablet {
    constructor(tela) {
        this.tela = tela;
    }
}

let samsung2 = new Tablet(true);

console.log(samsung2.tela);

class Ipad extends Tablet {
    constructor(marca,tela) {
        super(tela,tela);
        this.marca = marca;
    }
}

let apple = new Ipad("Apple", true);

console.log(apple.tela);

// InstanceOf

console.log(new Ipad instanceof Tablet);

console.log(apple instanceof Tablet);


