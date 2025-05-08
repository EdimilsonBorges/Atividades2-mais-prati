//7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
//carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
//cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
//(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
//mostre o preço a ser pago de acordo com os dados a seguir:

//Carros populares
//- Até 100 Km percorridos: R$ 0,20 por Km
//- Acima de 100 Km percorridos: R$ 0,10 por Km

//Carros de luxo
//- Até 200 Km percorridos: R$ 0,30 por Km
//- Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require('prompt-sync')();

function imprimirMenu() {
    console.log("----------------------");
    console.log("| 1. Carro Popular   |");
    console.log("| 2. Carro de Luxo   |");
    console.log("----------------------");
}

function validarValor(valor) {
    return isNaN(valor) || valor < 0;
}

function validarTipoCarro(tipoCarro) {
    return isNaN(tipoCarro) || tipoCarro < 1 || tipoCarro >= 2;
}

function calcularPreco(tipoCarro, dias, km) {
    let precoBase = tipoCarro === 1 ? 90 : 150;
    let precoKm;

    if (tipoCarro === 1) {
        precoKm = km <= 100 ? km * 0.20 : km * 0.10;
    } else {
        precoKm = km <= 200 ? km * 0.30 : km * 0.25;
    }

    return dias * precoBase + precoKm;
}

function obterValorFinal() {
    const tipoCarro = Number(prompt("Digite o tipo de carro que deseja alugar: "));
    if (validarTipoCarro(tipoCarro)) return null;

    const dias = Number(prompt("Digite a quantidade de dias que deseja alugar: "));
    if (validarValor(dias)) return null;

    const km = Number(prompt("Digite a quantidade de quilômetros que deseja percorrer: "));
    if (validarValor(km)) return null;

    return calcularPreco(tipoCarro, dias, km);
}

imprimirMenu();
const valorFinal = obterValorFinal();

if (valorFinal !== null) {
    console.log(`Você vai precisar pagar R$ ${valorFinal.toFixed(2)} para alugar esse carro.`);
} else {
    console.log("Valor inválido. Tente novamente!");
}