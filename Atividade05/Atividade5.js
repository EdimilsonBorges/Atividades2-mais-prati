//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

prompt = require('prompt-sync')();

function verificarGanhador(opcoes, computador, jogador) {
    if (jogador === computador) {
        console.log(`Empate: Ambos escolheram ${opcoes[jogador - 1]}`);
    } else if ((jogador === 1 && computador === 3) || (jogador === 2 && computador === 1) || (jogador === 3 && computador === 2)) {
        console.log(`O computador escolheu ${opcoes[computador - 1]}, e você ${opcoes[jogador - 1]}. Parabéns você ganhou!`);
    } else if ((jogador === 3 && computador === 1) || (jogador === 1 && computador === 2) || (jogador === 2 && computador === 3)) {
        console.log(`O computador escolheu ${opcoes[computador - 1]}, e você ${opcoes[jogador - 1]}. O computador ganhou!`);
    }
}
function jogar() {
    console.log("----------------");
    console.log("| 1. PEDRA     |");
    console.log("| 2. PAPEL     |");
    console.log("| 3. TESOURA   |");
    console.log("| 0. SAIR      |");
    console.log("----------------");

    return Number(prompt("Escolha uma opção: "));
}

function validarJogada(jogador) {
    return !isNaN(jogador) && jogador >= 0 && jogador <= 3;
}

function play() {
    const jogador = jogar();

    if (validarJogada(jogador)) {
        const computador = (Math.floor(Math.random() * 3) + 1);
        const opcoes = ["PEDRA", "PAPEL", "TESOURA"];

        verificarGanhador(opcoes, computador, jogador);
    } else {
        console.log("Você escolheu um opção inválida!!");
    }
}

play();