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

// Instanciando com o new

function Livro(titulo,numeroPaginas,volume) {
    this.titulo = titulo;
    this.numeroPaginas = numeroPaginas;
    this.volume = volume;
}

let harryPotter1 = new Livro("Harry Potter e a Pedra Filosofal", 34, 1);

console.log(harryPotter1.titulo);

