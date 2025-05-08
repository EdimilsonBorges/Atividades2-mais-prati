# Simulador de Aluguel de Carros

Este script em Node.js simula o cálculo do valor a ser pago no aluguel de um carro com base no tipo de carro escolhido, dias de aluguel e quilômetros a serem percorridos.

## Como funciona

1. O usuário escolhe entre dois tipos de carro:
   - Carro Popular
   - Carro de Luxo

2. O usuário informa:
   - Quantidade de dias de aluguel.
   - Quantidade de quilômetros que pretende percorrer.

3. O programa calcula o valor total com base nas regras abaixo.

## Regras de Cálculo

### Carro Popular
- **Diária**: R$ 90,00
- **Quilometragem**:
  - Até 100km: R$ 0,20 por km
  - Acima de 100km: R$ 0,10 por km

### Carro de Luxo
- **Diária**: R$ 150,00
- **Quilometragem**:
  - Até 200km: R$ 0,30 por km
  - Acima de 200km: R$ 0,25 por km

## Validações
- O tipo de carro deve ser 1 (Popular) ou 2 (Luxo).
- Os valores de dias e quilômetros devem ser numéricos e positivos.

## Exemplo de uso

```bash
$ node aluguel.js
----------------------
| 1. Carro Popular   |
| 2. Carro de Luxo   |
----------------------
Digite o tipo de carro que deseja alugar: 1
Digite a quantidade de dias que deseja alugar: 3
Digite a quantidade de quilômetros que deseja percorrer: 150
Você vai precisar pagar R$ 315.00 para alugar esse carro.
```

## Requisitos
- Node.js
- Biblioteca [`prompt-sync`](https://www.npmjs.com/package/prompt-sync)

Instale o prompt-sync com:

```bash
npm install prompt-sync
```