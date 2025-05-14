//11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//  Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//  valores da sequência.

const prompt = require('prompt-sync')();

function eNumeroValido(valor) {
    return !isNaN(valor) && valor !== '';
}

function calcularPA(primeiroTermo, razao){
    let termoAtual = primeiroTermo;
    let soma = 0;
    let termos = [];

    for (let i = 0; i < 10; i++) {
        termos.push(termoAtual);
        soma += termoAtual;
        termoAtual += razao;
    }

    console.log(`Os 10 primeiros termos da PA são: ${termos.join(', ')}`);
    console.log(`A soma dos 10 termos é: ${soma}`);
}

const primeiroTermo = Number(prompt("Digite o primeiro termo da PA: "));
const razao = Number(prompt("Digite a razão da PA: "));

if (!eNumeroValido(primeiroTermo) || !eNumeroValido(razao)) {
    console.log("Valores inválidos! Por favor, insira números válidos.");
} else {
    calcularPA(primeiroTermo, razao);
}