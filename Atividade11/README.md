# 📐 Progressão Aritmética

Este programa em JavaScript lê o primeiro termo e a razão de uma Progressão Aritmética (PA), e exibe os 10 primeiros elementos da sequência, além da soma total desses valores.

---

## 📋 Funcionalidades

- Solicita ao usuário:
  - O **primeiro termo** da PA
  - A **razão** (diferença entre os termos)
- Calcula os **10 primeiros termos**
- Mostra a **sequência da PA**
- Exibe a **soma dos termos**

---

## 🧠 Como funciona o código

```
const prompt = require('prompt-sync')();
```

Usa o pacote `prompt-sync` para ler entradas do usuário pelo terminal.

### 🔎 Validação

```
function eNumeroValido(valor) {
    return !isNaN(valor) && valor !== '';
}
```

Verifica se os valores inseridos são números válidos.

### 📈 Cálculo da PA

```
function calcularPA(primeiroTermo, razao) {
    let termoAtual = primeiroTermo;
    let soma = 0;
    let termos = [];

    for (let i = 0; i < 10; i++) {
        termos.push(termoAtual);
        soma += termoAtual;
        termoAtual += razao;
    }

    console.log(`Os 10 primeiros termos da PA são: ${termos.join(', ')}`);
    console.log(`A soma dos 10 termos é: ${soma}`);
}
```

- A função `calcularPA` gera os 10 primeiros termos a partir do termo inicial e da razão.
- Armazena os termos em um array.
- Soma os valores e exibe tudo no final.

### 🧪 Execução

```
const primeiroTermo = Number(prompt("Digite o primeiro termo da PA: "));
const razao = Number(prompt("Digite a razão da PA: "));

if (!eNumeroValido(primeiroTermo) || !eNumeroValido(razao)) {
    console.log("Valores inválidos! Por favor, insira números válidos.");
} else {
    calcularPA(primeiroTermo, razao);
}
```

- Lê os valores do usuário.
- Valida as entradas.
- Chama `calcularPA` se os dados forem válidos.

---

## ✅ Exemplo de execução

```
Digite o primeiro termo da PA: 2
Digite a razão da PA: 3
Os 10 primeiros termos da PA são: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29
A soma dos 10 termos é: 155
```

---

## 💡 Observação

Este programa é executado via terminal e requer o pacote [`prompt-sync`](https://www.npmjs.com/package/prompt-sync).

Para instalar:
```
npm install prompt-sync
```