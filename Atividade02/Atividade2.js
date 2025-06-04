// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

prompt = require('prompt-sync')();

const numeroSorteado = (Math.floor(Math.random() * 100) + 1);

let palpite = -1;
let tentativas = 0;

while (true) {
    tentativas++;
    palpite = Number(prompt(`Tentativa ${tentativas}. Digite um número entre 1 a 100: `));
    if (palpite == numeroSorteado) {
        break;
    }

    if (palpite > numeroSorteado) {
        console.log(`Você errou, o número sorteado é menor do que ${palpite}`);
    }else{
        console.log(`Você errou, o número sorteado é maior do que ${palpite}`);
    }
}

console.log(`Você acertou em ${tentativas} tentativas, o número sorteado foi ${numeroSorteado}`);