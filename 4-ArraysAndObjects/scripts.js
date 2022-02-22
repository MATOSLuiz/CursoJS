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

console.log("\n");
console.log("\n");

//Mutação de objeto

let pet = {
    nome: "Scooby"
}

let pet2 = pet;

console.log(pet2.nome)
//pet2 herdou as propriedades do objeto pet

pet2.nome = "BOB";

console.log(pet.nome)

console.log("\n");
console.log("\n");

// loops com arrays

let names = ["Josh", "Gabe", "Luke"];

for(i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let user = ["name", "email", "password"];

for(i = 0; i < user.length; i++) {
    console.log(user[i]);
}

console.log("\n");
console.log("\n");

//push(adiciona elemento no fim do array) e pop(remove ultimo elemento do array)

let numeros =  [1, 2, 7];

let numeroRemovido = numeros.pop();

console.log(numeroRemovido);
console.log(numeros);

let numeroAdicionado = numeros.push(18);

console.log(numeroAdicionado);
console.log(numeros);

console.log("\n");
console.log("\n");

//shift(remove primeiro elemento do array) e unshift(Adiciona novo elemento no indice 0 do array)

let pecasComputador = ["HD", "Memória RAM", "Processador", "Fonte", "Placa Mãe"];

let pecaRemovida = pecasComputador.shift();

console.log(pecaRemovida);
console.log(pecasComputador);

pecasComputador.unshift("SSD");

console.log(pecasComputador);

console.log("\n");
console.log("\n");

//indexOf(Procura o primeiro indice do elemento indicado) e lastIndexOf(procura o ultimo indice do elemento indicado)

let nums = [1,2,3,4,2];

console.log(nums.indexOf(2));
console.log(nums.lastIndexOf(2));

console.log("\n");
console.log("\n");

// slice(procura os indices dependendo dos parametros que quisermos)

let numbers = [1,2,3,4,5,6,7,8];

console.log(numbers.slice(0,5));
console.log(numbers.slice(1,5));

console.log(numbers.slice(2));
console.log(numbers.slice(-5));
console.log(numbers.slice(0,-4));

console.log("\n");
console.log("\n");

//forEach(um for sem frescura)

let profissoes = ["Pedreiro", "Garoto de Programa", "Designer", "Gerente de Projetos"];

profissoes.forEach ( profissao => { 
    console.log(`já trabalhei como ${profissao}`);
})

console.log("\n");

let eletroDomesticos = ["Fogão", "Geladeira", "Máquina de Lavar"];

eletroDomesticos.forEach (eletro => {
    console.log(`Eu tenho ${eletro} lá em casa!`);
})

console.log("\n");
console.log("\n");

//includes retorna um elemento existente no array, esse metodo retorna true or false; reverse inverte o array

let carros = ["Saveiro", "Gol", "Toro", "S10"];

console.log(carros.includes("Saveiro"));
console.log(carros.includes("saveiro")); //importancia do case-sensitive

console.log("\n");

console.log(carros.reverse());



