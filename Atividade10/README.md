# Analisador de Números

Este programa em JavaScript solicita ao usuário que digite vários números positivos e realiza uma análise simples sobre os valores informados. O programa encerra quando o usuário digita `-1`.

## Funcionalidades

- Soma de todos os números digitados.
- Determina o menor valor entre os números digitados.
- Calcula a média dos números.
- Conta quantos números pares foram digitados.

## Como funciona

1. O programa utiliza a biblioteca `prompt-sync` para ler entradas do usuário via terminal.
2. Enquanto o usuário não digitar `-1`, ele pode continuar inserindo números válidos (maiores ou iguais a 0).
3. Para cada número digitado:
   - Ele é somado à `somaTotal`.
   - É comparado com o `menorValor` atual.
   - Se for par, incrementa o contador `pares`.
   - Incrementa o contador geral `count`.
4. Após digitar `-1`, o programa exibe os seguintes resultados:
   - Soma total dos números válidos.
   - Menor número digitado.
   - Média dos valores.
   - Quantidade de valores pares digitados.

## Exemplo de execução

```
Digite um número qualquer ou -1 pra sair: 10
Digite um número qualquer ou -1 pra sair: 3
Digite um número qualquer ou -1 pra sair: 7
Digite um número qualquer ou -1 pra sair: -1

A soma de todos os valores é 20
O menor valor digitado foi 3
A média entre todos os valores é 6.67
Foram digitadas 1 valores pares
```

## Observações

- O valor `-1` serve apenas como comando para encerrar o programa e **não entra no cálculo**.
- Valores negativos (exceto -1) ou não numéricos são considerados inválidos.

## Pré-requisitos

Instale o `prompt-sync` se ainda não estiver disponível no seu ambiente:

```bash
npm install prompt-sync
```

## Execução

```bash
node sAtividade10.js
```