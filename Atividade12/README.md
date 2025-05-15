# Sequência de Fibonacci

Este programa JavaScript gera os primeiros números da sequência de Fibonacci com base em uma quantidade definida. A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois anteriores, geralmente começando com 0 e 1.

## 🔍 Explicação

- A função `calcularFibonacci(quantidade)` recebe como parâmetro a quantidade de termos a serem gerados.
- Ela utiliza três variáveis para calcular os termos: `primeiroNumero`, `numeroAtual` e `resultado`.
- O laço `for` é executado `quantidade` vezes, sempre somando os dois últimos números para gerar o próximo termo da sequência.
- Cada número gerado é adicionado a um array chamado `fibonaci`.
- Ao final, os números são unidos por hífen (`-`) e retornados.

## 💡 Exemplo de saída

```bash
Os dez primeiros números da sequência de fibonacci são: 1-1-2-3-5-8-13-21-34-55
```

## 📌 Observações

- Neste código, a sequência começa em 1 ao invés de 0, o que é uma variação comum.
- O código pode ser adaptado para iniciar com 0 e 1 caso necessário.

## 🧑‍💻 Requisitos

Este código precisa apenas de um ambiente com suporte a JavaScript, como Node.js ou o console de um navegador.