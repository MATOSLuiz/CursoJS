//while

let x = 15;

while(x > 0) {
    console.log("O x é " + x);
    x = x - 5;
}

// do while pouco usado

let y = 20;

do {
   console.log(y/5)
   y = y - 2 
} while(y >= 0);

//for ; while mais compacto argumento1 = variavel arg2 = condição arg3 = incremento ou decremento
let nome = "Carlos";

for (let z = 0; z < 100; z = z + 10) {
    if(z == 20) {
        nome = "Luiz";
    }
    if(z == 80 && nome == "Luiz") {
        console.log(`Feito o nome é ${nome} e Z é ${z}`)
        break //break é utilizado para abortar um bloco de codigo no exemplo um for.
    }
    console.log(z)
}
