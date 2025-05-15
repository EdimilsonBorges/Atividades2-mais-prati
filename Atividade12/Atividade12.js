//12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
//Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

function calcularFibonacci(quantidade) {

    let primeiroNumero = 1;
    let numeroAtual = 1;
    let resultado = 0;
    let fibonaci = [];

    for (let i = 0; i < quantidade; i++) {

        primeiroNumero = numeroAtual;
        numeroAtual = resultado;
        resultado = primeiroNumero + numeroAtual;

        fibonaci.push(resultado);
    }
return fibonaci.join("-");

}

console.log(`Os dez primeiros números da sequência de fibonacci são: ${calcularFibonacci(10)}`);
