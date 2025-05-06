//4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
//comprimentos e diga se é possível formar um triângulo com essas retas.
//Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
//lado deve ser menor que a soma dos outros dois.

prompt = require('prompt-sync')();

const ladoA = Number(prompt("Digite o primeiro lado do triângulo: "));
const ladoB = Number(prompt("Digite o segundo lado do triângulo: "));
const ladoC = Number(prompt("Digite o terceiro lado do triângulo: "));

function eNumeroValido(){
   return (!isNaN(ladoA) && ladoA < 0) && (!isNaN(ladoB) && ladoB < 0) && (!isNaN(ladoC) && ladoC < 0);
}

function verificarTriangulo(){
    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoB) && ladoC < (ladoA + ladoC)) {
        console.log("É triângulo.");
    } else {
        console.log("Não forma um triângulo.");
    }
}

if(eNumeroValido()){
  verificarTriangulo();
}else{
  console.log("Um ou mais números digitados são inválidos, não pode conter letras e nem valores negativos");
}