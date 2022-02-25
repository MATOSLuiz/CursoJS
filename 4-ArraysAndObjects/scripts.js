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

console.log("\n");
console.log("\n");
console.log("\n");
//METODOS DE STRINGS

//trim() remove tudo que não é string

let email = "\n       Segue relatório em anexo \n" ;

let emailCorrect = email.trim();

console.log(email);
console.log(emailCorrect);

console.log("\n");
console.log("\n");

//Padstart() Adiciona caracteres no começo da string com isso pode padronizar oq recebemos

let digitoBancoDoBrasil = "1";

console.log(digitoBancoDoBrasil.padStart(5,"0"));

console.log("\n");
console.log("\n");

// split() divide uma string por um separador e retorna um array

let hotDog = "Pão,Salsicha,Molho de Tomate,Sal,Pimenta do reino,Macarrão";

console.log(hotDog.split(","));

console.log("\n");
console.log("\n");

//join() junta elementos de um array e transforma em frase por um separador.

let frase = "Panela velha é que faz comida boa";

let arrFrase = frase.split(" ")

let novaFrase = arrFrase.join("-");

console.log(arrFrase)
console.log(novaFrase);

console.log("\n");
console.log("\n");

// repeat() Repete uma string de acordo com o parametro que a gente passa.

let girassol = "gira ";

music = girassol.repeat(8) + "Sol";

console.log(music);

//Alceu Valença é bom demais

console.log("\n");
console.log("\n");

//Destructuring com objetos podemos definir variaveis com as propriedades de um objeto

const luiz = {
    age: 18,
    height : 1.83
}

const {age: idade, height: altura} = luiz;

console.log(idade);
console.log(altura);

console.log("\n");
console.log("\n");


//Destructuring com arrays: podemos definir variaveis com valores de um array

let materialEscolar = ["Caneta", "Borracha", "Lápis", "Caderno"];

let [Material1, Material2, Material3, Material4] = materialEscolar;

console.log(Material1);
console.log(Material4);

