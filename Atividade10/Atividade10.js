//10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
//cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
//a) O somatório entre todos os valores;
//b) Qual foi o menor valor digitado;
//c) A média entre todos os valores;
//d) Quantos valores são pares.

prompt = require('prompt-sync')();

let numero = 0;
let count = 0;
let somaTotal = 0;
let menorValor = Infinity;
let media = 0;
let pares = 0;

function eValorValido(valor) {
    return !isNaN(valor) && valor > -1;
}

do {
    numero = Number(prompt("Digite um número qualquer ou -1 pra sair: "));
    if (!eValorValido(numero)) {
        console.log(`O valor digitado é inválido, tente novamente!`);
        continue;
    }
    if (numero === -1) continue;
    somaTotal += numero;
    menorValor = menorValor < numero ? menorValor : numero;
    pares = numero % 2 === 0 ? pares + 1 : pares;
    count++;

} while (numero !== -1);

media = somaTotal / count;

if (count !== 0) {
    console.log(`A soma de todos os valores é ${somaTotal}`);
    console.log(`O menor valor digitado foi ${menorValor}`);
    console.log(`A média entre todos os valores é ${media.toFixed(2)}`);
    console.log(`Foram digitadas ${pares} valores pares`);
}