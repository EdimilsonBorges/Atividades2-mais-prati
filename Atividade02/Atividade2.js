//2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
//h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
//multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')();

const velocidade = Number(prompt("Digite a velocidade do carro em KM: "));

function verificarMulta(velocidade){
    if(velocidade > 80){
        const velocidadeUltrapassada = velocidade - 80;
        const multa = velocidadeUltrapassada * 5;
        console.log(`Velocidade não permitida, foi aplicada uma multa de ${multa.toFixed(2)} reais`);
    }else{
        console.log("Velocidade permitida, nenhuma multa foi aplicada.");
    }
}

function ehNumeroValido(velocidade){
    return !isNaN(velocidade) && velocidade > 0;
}

if(ehNumeroValido(velocidade)){
    verificarMulta(velocidade);
} else {
    console.log("A velocidade aplicada é inválida!");
}