# Leitor de Salários por Gênero

Este programa em JavaScript lê o salário e o sexo de vários funcionários e calcula o total de salários pagos aos homens e às mulheres. Ele continua coletando dados até que o usuário opte por sair.

## Como funciona

1. O programa utiliza o pacote `prompt-sync` para receber entradas do usuário via terminal.
2. Inicialmente, os totais de salários para homens (`salarioM`) e mulheres (`salarioF`) são definidos como 0.
3. Um laço `do...while` é utilizado para repetir o processo de leitura:
   - Pergunta o sexo do funcionário (`M` ou `F`).
   - Pergunta o salário correspondente.
   - Valida se o salário digitado é um número positivo.
   - Acumula o salário na variável correta (`salarioM` ou `salarioF`).
   - Pergunta ao usuário se deseja continuar (`S` para sim, qualquer outra tecla para não).
4. Ao final, imprime os totais de salários pagos a homens e mulheres.

## Exemplo de uso

```
Digite o sexo do funcionário (M/F): M
Digite o salário do funcionário: 3000
Deseja continuar? (S/N): S
Digite o sexo do funcionário (M/F): F
Digite o salário da funcionária: 3500
Deseja continuar? (S/N): N
Total pago aos homens: R$3000.00
Total pago às mulheres: R$3500.00
```

## Observações

- O programa é resistente a entradas inválidas, como letras em vez de números ou valores negativos.
- Só aceita `M` ou `F` como opções válidas de sexo.
- O laço termina quando o usuário digita algo diferente de `S` ao ser perguntado se deseja continuar.

## Requisitos

- Node.js instalado
- Pacote `prompt-sync` instalado via:

```
npm install prompt-sync
```

## Execução

Baixe o arquivo `Atividade9.js` e execute com:

```
node Atividade9.js
```