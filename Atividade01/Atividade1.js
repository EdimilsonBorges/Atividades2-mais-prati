// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano){
  const diaInt = parseInt(dia, 10);
  const mesInt = parseInt(mes, 10) - 1; // Mês começa em 0 em JS
  const anoInt = parseInt(ano, 10);

  const data = new Date(anoInt, mesInt, diaInt);

  if (data.getFullYear() !== anoInt || data.getMonth() !== mesInt || data.getDate() !== diaInt) {
    return false; // Dia inválido para o mês/ano
  }

  return true; // Data válida
}

console.log(ehDataValida(28,2,2023));