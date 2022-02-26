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
