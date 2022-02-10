//while

let x = 15;

while(x > 0) {
    console.log("O x é " + x);
    x = x - 5;
}

console.log("\n");
console.log("\n");
console.log("\n");

// do while pouco usado

let y = 20;

do {
   console.log(y/5)
   y = y - 2 
} while(y >= 0);

console.log("\n");
console.log("\n");
console.log("\n");

//for ; while mais compacto argumento1 = variavel arg2 = condição arg3 = incremento ou decremento
let nome = "Carlos";

for (let z = 0; z < 100; z = z + 10) {
    if(z == 20) {
        nome = "Luiz";
    }
    if(z == 80 && nome == "Luiz") {
        console.log(`Feito o nome é ${nome} e Z é ${z}`);
        break //break é utilizado para abortar um bloco de codigo no exemplo um for.
    }
    console.log(z);
}
console.log("\n");
console.log("\n");
console.log("\n");

// continue para pular uma execução do loop

for(p = 10; p > 0; p = p - 1) {
    if(p % 2 == 0){
        console.log("Aqui tem continue");
        continue;
    }
    console.log(p);   
}

console.log("\n");
console.log("\n");
console.log("\n");
// incrementação resumida += ++ --

for(numero = 1; numero < 15; numero +=1){
    console.log(numero);
}

console.log("\n");
console.log("\n");
console.log("\n");
//++
for(numero = 1; numero < 10; numero++){
    console.log(numero);
}

console.log("\n");
console.log("\n");
console.log("\n");
//--
for(numero = 10; numero > 0; numero--){
    console.log(numero);
}

