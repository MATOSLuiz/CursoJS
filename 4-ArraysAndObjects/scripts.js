let arr = [1,2,3,4,5];
let bool = [true, false, false];
let str = ["Hello", "World"];
let misturado = ["Hello", true, 5, false]

console.log(arr);
console.log(bool);
console.log(str);
console.log(misturado);

console.log("\n")
console.log("\n")

//Acessar pelo indice que vai de 0 a ...

let array = [1,2,3,4];

console.log(array[0]);
console.log(array[array.length -1])

console.log("\n")
console.log("\n")

//Propriedades

let nome = "Luiz Henrique"

console.log(nome.length);
console.log(nome["length"]);

console.log("\n")
console.log("\n")

//Métodos

let marcaCarro = "fiat";

console.log(marcaCarro.toUpperCase());

//string.propriedade
//string.metodo()

console.log("\n")
console.log("\n")

//Objetos

let gato = {
    patas : 3,
    nome: "king",
    miar: function () {
        console.log("Miauuuuuuu")
    }
}

console.log(gato.patas);
console.log(gato.nome);
gato.miar();

//array []
//objeto {}

console.log("\n")
console.log("\n")

// Deletando e adicionando propriedades de objetos

let person = {
    name: "Luiz",
    age: 18,
    casado: true
}

delete person.casado;

console.log(person);

person.universitario = true;

console.log(person);

//Adicionar é muito mais usado que o deletar!

console.log("\n")
console.log("\n")

//Copiar propriedades de um objeto para o outro

let celular = {
    bateria: "Interna",
    tela: "amoled",
    memoriaRam: "4GB",
    armazenamento: "512GB"
}

let bonus = {
    plano: "15 meses",
    chips: 3
}

console.log(celular);

Object.assign(celular, bonus);

console.log(celular);

console.log("\n")
console.log("\n")

// identificar keys dos objetos

let obj = {
    chave: 1,
    chave2: 2
}

console.log(Object.keys(obj));

console.log("\n")
console.log("\n")

//Mutação de objeto

let pet = {
    nome: "Scooby"
}

let pet2 = pet;

console.log(pet2.nome)
//pet2 herdou as propriedades do objeto pet

pet2.nome = "BOB";

console.log(pet.nome)
