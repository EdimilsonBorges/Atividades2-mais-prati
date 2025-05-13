//9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
//mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
//perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
//funcionário.

prompt = require('prompt-sync')();

let salarioM = 0;
let salarioF = 0;
let continuar = "S";

function eValorValido(valor) {
    return !isNaN(valor) && valor > 0;
}

do {
    const sexo = prompt("Digite o sexo do funcionário (M/F): ").toUpperCase();
    let valor = 0.

    switch (sexo) {
        case "M":
            valor = Number(prompt("Digite o salário do funcionário: "));
            if (!eValorValido(valor)) {
                console.log(`O salário digitado é inválido!`);
                continue;
            }
            salarioM += valor;
            break;
        case "F":
            valor = Number(prompt("Digite o salário da funcionária: "));
            if (!eValorValido(valor)) {
                console.log(`O salário digitado é inválido!`);
                continue;
            }
            salarioF += valor;
            break;
        default:
            console.log("Sexo inválido! Digite M para masculino ou F para Feminino:");
            continue;
    }

    continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();

} while (continuar === "S");

console.log(`Total pago aos homens: R$${salarioM.toFixed(2)}`);
console.log(`Total pago às mulheres: R$${salarioF.toFixed(2)}`);