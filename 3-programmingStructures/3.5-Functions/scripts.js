// declarando uma função

function mostraNome(nome) {
    if(nome == "Luiz") {
        console.log("Olá Luiz");
    }
}

mostraNome("Luiz");

console.log("\n");
console.log("\n");
console.log("\n");

//função com return

const olaMundo = function(inicio) {
    if(inicio == true) {
        return "Hello world!";
    }
}

console.log(olaMundo(true));

console.log("\n");
console.log("\n");
console.log("\n");


const sub = function(a,b) {
    return a - b;
}

console.log(sub(15,1))

//escopo da função

let x = 25; //escopo global

const numero = function(){
    let x = 15;//escopo local
    console.log(x);
}

console.log(x)

numero();

console.log("\n");
console.log("\n");
console.log("\n");

//mais sobre escopo, qualquer bloco de código cria é um novo escopo, não só as funções

let y = 89;

for(let y = 30; y <= 50; y++) {
    console.log(y);
}

console.log("\n");
console.log("\n");
console.log("\n");





