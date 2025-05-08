//6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
//tentar descobrir qual foi o valor sorteado.

prompt = require('prompt-sync')();

function validarPalpite(palpite){
    return palpite < 0 || palpite > 5 || isNaN(palpite);
}

function verificarPalpite(palpite, numeroAleatorio){
    if (palpite === numeroAleatorio) {
        console.log(`VOCÊ ACERTOU!!! O número sorteado foi ${numeroAleatorio}`);
    } else {
        console.log(`VOCÊ ERROU!!! O número sorteado foi ${numeroAleatorio}`);
    }
}

while (true) {
    const palpite = Number(prompt("Adivinhe o número sorteado pelo computador entre (1 a 5) ou 0 pra sair: "));
    if (validarPalpite(palpite)) {
        console.log("Palpite inválido, o número precisa estar entre 1 a 5 ou 0 pra sair, tente novamente.");
        continue;
    }

    if (palpite === 0) break;

    const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
    verificarPalpite(palpite, numeroAleatorio);
}