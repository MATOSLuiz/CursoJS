// declarando uma função

function mostraNome(nome) {
    if(nome == "Luiz") {
        console.log("Olá Luiz");
    }
}

mostraNome("Luiz");

//função com return

const olaMundo = function(inicio) {
    if(inicio == true) {
        return "Hello world!";
    }
}

console.log(olaMundo(true));


const sub = function(a,b) {
    return a - b;
}

console.log(sub(15,1))