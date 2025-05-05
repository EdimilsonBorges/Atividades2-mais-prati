//1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
//Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
//Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
//vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')();

const cigarrosPorDia = Number(prompt("Digite quantos cigarros você fuma por dia: "));
const anosFumando = Number(prompt("Digite quantos anos faz que você fuma: "));

function isNumber(number) {
    return !isNaN(number) && number > 0;
}

function minutosPorDia(cigarrosPorDia) {
    return cigarrosPorDia * 10;
}

function tempoDePerdaEmMinutos(anosFumando, cigarrosPorDia) {
    const tempoEmMinutos = (anosFumando * 365) * minutosPorDia(cigarrosPorDia);
    return transformarMinutosEmDias(tempoEmMinutos);
}

function transformarMinutosEmDias(tempoEmMinutos) {
    const dias = Math.floor(tempoEmMinutos / 1440);
    let resto = tempoEmMinutos % 1440;

    const horas = Math.floor(resto / 60);
    const minutos = resto % 60;

    return `Você perdeu ${dias} dias ${horas} horas e ${minutos} minutos de vida`;
}

function imprimirResultado(cigarrosPorDia, anosFumando){
    
    if(isNumber(cigarrosPorDia) && isNumber(anosFumando)){
        console.log(tempoDePerdaEmMinutos(anosFumando, cigarrosPorDia));
    } else {
        console.log(tempoDePerdaEmMinutos(anosFumando, cigarrosPorDia));
    }
}

imprimirResultado(cigarrosPorDia, anosFumando);
