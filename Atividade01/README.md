# Validador de Datas em JavaScript

Este projeto contém uma função simples em JavaScript chamada `ehDataValida`, que verifica se uma data fornecida é válida, levando em consideração o dia, mês e ano (incluindo anos bissextos).

## 📄 Descrição

A função `ehDataValida(dia, mes, ano)` recebe três parâmetros numéricos:
- `dia`: o número do dia (1 a 31)
- `mes`: o número do mês (1 a 12)
- `ano`: o número do ano (ex: 2024)

Ela retorna:
- `true` se a data for válida
- `false` se a data for inválida

## 💡 Como funciona

O JavaScript permite criar datas usando o construtor `new Date(ano, mes, dia)`, onde o mês é **baseado em zero** (ou seja, janeiro é 0, dezembro é 11).

A função:
1. Converte os parâmetros para inteiros.
2. Cria um objeto `Date` com os valores fornecidos.
3. Compara se os valores extraídos da `Date` criada correspondem aos valores originais.
   - Isso é necessário porque o objeto `Date` ajusta automaticamente datas inválidas. Ex: `new Date(2023, 1, 30)` retorna 2 de março de 2023.
4. Retorna `true` se todos os valores coincidirem, `false` caso contrário.

## 🧪 Exemplo de uso

```javascript
console.log(ehDataValida(28, 2, 2023)); // true
console.log(ehDataValida(30, 2, 2023)); // false
console.log(ehDataValida(31, 4, 2023)); // false
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
```

## ✅ Requisitos

- Node.js (para executar o código via terminal) ou qualquer navegador moderno.

## 🚀 Como testar

Você pode rodar o script em um terminal com Node.js:

```bash
node Atividade1.js
```

Ou colar o código em um console de navegador para testar.