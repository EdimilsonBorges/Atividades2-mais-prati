//3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
//Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
//R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')();

const distancia = Number(prompt("Digite a quantidade de quilômetros que você deseja percorrer em KM?: "));

function eNumeroValido(distancia){
   return !isNaN(distancia) && distancia > 0;
}

function calcularValor(distancia){
 return distancia <= 200 ? distancia * 0.50 : distancia * 0.45;
}

function mostrarResultado(distancia){
    if(eNumeroValido(distancia)){
        valorCobrado = calcularValor(distancia)
        console.log(`Vai ser cobrado ${valorCobrado} reais para realizar essa viagem`);
    }else{
        console.log(`O valor digitado é inválido!!`);
    }
    
}

mostrarResultado(distancia);